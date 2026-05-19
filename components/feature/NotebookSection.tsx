/**
 * NotebookSection — reusable component for all 4 learning modules.
 * Users can pick images from their phone gallery; photos are persisted
 * in AsyncStorage per module key so they survive app restarts.
 */
import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, Pressable, ScrollView, Alert,
  ActivityIndicator, Modal, Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

export interface NoteImage {
  id: string;
  uri: string;
  label: string;
  isUserUploaded?: boolean;
}

interface Props {
  /** Unique key used for AsyncStorage persistence, e.g. "math" */
  storageKey: string;
  /** Title shown in the section header */
  title: string;
  /** Subtitle shown below the title */
  subtitle: string;
  /** Pre-defined placeholder images */
  placeholderImages: NoteImage[];
  /** Accent color for the section */
  color: string;
}

const STORAGE_PREFIX = '@edunova_notes_';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export function NotebookSection({ storageKey, title, subtitle, placeholderImages, color }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [userImages, setUserImages] = useState<NoteImage[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isPickerLoading, setIsPickerLoading] = useState(false);
  const [lightboxUri, setLightboxUri] = useState<string | null>(null);

  // Load saved user images on mount
  useEffect(() => {
    loadSavedImages();
  }, [storageKey]);

  const loadSavedImages = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_PREFIX + storageKey);
      if (stored) {
        setUserImages(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  };

  const saveImages = async (images: NoteImage[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_PREFIX + storageKey, JSON.stringify(images));
    } catch {
      // ignore
    }
  };

  const handleAddImage = useCallback(async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Please allow access to your photo library to add notebook images.',
        [{ text: 'OK' }]
      );
      return;
    }

    setIsPickerLoading(true);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.7,
        selectionLimit: 5,
      });

      if (!result.canceled && result.assets.length > 0) {
        const newImages: NoteImage[] = result.assets.map((asset, i) => ({
          id: `user-${storageKey}-${Date.now()}-${i}`,
          uri: asset.uri,
          label: `My Note ${userImages.length + i + 1}`,
          isUserUploaded: true,
        }));
        const updated = [...userImages, ...newImages];
        setUserImages(updated);
        await saveImages(updated);
      }
    } catch (err) {
      Alert.alert('Error', 'Could not open photo library. Please try again.');
    } finally {
      setIsPickerLoading(false);
    }
  }, [userImages, storageKey]);

  const handleDeleteUserImage = useCallback((id: string) => {
    Alert.alert(
      'Remove Image',
      'Remove this note image from the section?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            const updated = userImages.filter(img => img.id !== id);
            setUserImages(updated);
            await saveImages(updated);
            if (expandedId === id) setExpandedId(null);
          },
        },
      ]
    );
  }, [userImages, expandedId, storageKey]);

  const allImages = [...placeholderImages, ...userImages];
  const expandedImage = allImages.find(i => i.id === expandedId);

  return (
    <>
      <View style={[styles.container, Shadow.sm]}>
        {/* Header */}
        <Pressable
          onPress={() => setIsOpen(v => !v)}
          style={({ pressed }) => [styles.header, pressed && { opacity: 0.82 }]}
        >
          <View style={[styles.badge, { backgroundColor: color + '22' }]}>
            <Text style={styles.badgeEmoji}>📓</Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
              {subtitle} · {allImages.length} {allImages.length === 1 ? 'image' : 'images'}
            </Text>
          </View>
          <MaterialIcons
            name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={22}
            color={Colors.textSubtle}
          />
        </Pressable>

        {isOpen ? (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {/* Placeholder images */}
              {placeholderImages.map((img) => (
                <Pressable
                  key={img.id}
                  onPress={() => {
                    setExpandedId(expandedId === img.id ? null : img.id);
                    if (expandedId !== img.id) setLightboxUri(img.uri);
                  }}
                  style={({ pressed }) => [styles.thumb, pressed && { opacity: 0.88 }]}
                >
                  <Image
                    source={{ uri: img.uri }}
                    style={styles.thumbImage}
                    contentFit="cover"
                    transition={200}
                  />
                  <View style={styles.thumbLabel}>
                    <Text style={styles.thumbText} numberOfLines={2}>{img.label}</Text>
                  </View>
                  <View style={styles.expandIcon}>
                    <MaterialIcons name="zoom-in" size={13} color="#fff" />
                  </View>
                </Pressable>
              ))}

              {/* User uploaded images */}
              {userImages.map((img) => (
                <Pressable
                  key={img.id}
                  onPress={() => {
                    setExpandedId(expandedId === img.id ? null : img.id);
                    if (expandedId !== img.id) setLightboxUri(img.uri);
                  }}
                  onLongPress={() => handleDeleteUserImage(img.id)}
                  style={({ pressed }) => [styles.thumb, styles.userThumb, pressed && { opacity: 0.88 }]}
                >
                  <Image
                    source={{ uri: img.uri }}
                    style={styles.thumbImage}
                    contentFit="cover"
                    transition={200}
                  />
                  <View style={styles.thumbLabel}>
                    <Text style={styles.thumbText} numberOfLines={2}>{img.label}</Text>
                  </View>
                  {/* User badge */}
                  <View style={[styles.userBadge, { backgroundColor: color }]}>
                    <MaterialIcons name="person" size={10} color="#fff" />
                  </View>
                  {/* Long-press hint */}
                  <View style={styles.expandIcon}>
                    <MaterialIcons name="zoom-in" size={13} color="#fff" />
                  </View>
                </Pressable>
              ))}

              {/* Add Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.addCard,
                  pressed && { opacity: 0.82, transform: [{ scale: 0.97 }] },
                  isPickerLoading && { opacity: 0.6 },
                ]}
                onPress={handleAddImage}
                disabled={isPickerLoading}
              >
                {isPickerLoading ? (
                  <ActivityIndicator size="small" color={color} />
                ) : (
                  <View style={[styles.addIconCircle, { backgroundColor: color + '18' }]}>
                    <MaterialIcons name="add-photo-alternate" size={26} color={color} />
                  </View>
                )}
                <Text style={[styles.addText, { color }]}>
                  {isPickerLoading ? 'Opening...' : 'Add Your\nNotes'}
                </Text>
                <Text style={styles.addHint}>Tap to pick{'\n'}from gallery</Text>
              </Pressable>
            </ScrollView>

            {/* Inline expanded view */}
            {expandedId && expandedImage ? (
              <View style={styles.expanded}>
                <Image
                  source={{ uri: expandedImage.uri }}
                  style={styles.expandedImage}
                  contentFit="contain"
                  transition={200}
                />
                <View style={styles.expandedLabel}>
                  <Text style={styles.expandedLabelText}>{expandedImage.label}</Text>
                  {expandedImage.isUserUploaded ? (
                    <Text style={[styles.expandedLabelHint, { color }]}>Long-press thumbnail to remove</Text>
                  ) : null}
                </View>
                <Pressable
                  onPress={() => { setExpandedId(null); setLightboxUri(null); }}
                  style={styles.closeBtn}
                  hitSlop={8}
                >
                  <MaterialIcons name="close" size={20} color="#fff" />
                </Pressable>
                {/* Fullscreen button */}
                <Pressable
                  onPress={() => setLightboxUri(expandedImage.uri)}
                  style={styles.fullscreenBtn}
                  hitSlop={8}
                >
                  <MaterialIcons name="fullscreen" size={20} color="#fff" />
                </Pressable>
              </View>
            ) : null}

            {userImages.length === 0 ? (
              <View style={styles.emptyHint}>
                <MaterialIcons name="info-outline" size={14} color={Colors.textSubtle} />
                <Text style={styles.emptyHintText}>
                  Tap "Add Your Notes" to pick photos from your phone gallery
                </Text>
              </View>
            ) : null}
          </>
        ) : null}
      </View>

      {/* Fullscreen Lightbox Modal */}
      <Modal
        visible={!!lightboxUri && expandedId !== null}
        transparent
        animationType="fade"
        onRequestClose={() => { setLightboxUri(null); }}
      >
        <View style={styles.lightboxBg}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setLightboxUri(null)} />
          {lightboxUri ? (
            <Image
              source={{ uri: lightboxUri }}
              style={styles.lightboxImage}
              contentFit="contain"
              transition={200}
            />
          ) : null}
          <Pressable
            onPress={() => setLightboxUri(null)}
            style={styles.lightboxClose}
            hitSlop={12}
          >
            <MaterialIcons name="close" size={26} color="#fff" />
          </Pressable>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    marginBottom: Spacing.md,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    padding: Spacing.md,
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeEmoji: { fontSize: 22 },
  headerText: { flex: 1, gap: 2 },
  title: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.text },
  subtitle: { fontSize: FontSize.xs, color: Colors.textSubtle },
  scrollContent: {
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
  },
  thumb: {
    width: 130,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    position: 'relative',
  },
  userThumb: {
    borderWidth: 2,
    borderColor: Colors.primary + '60',
  },
  thumbImage: { width: 130, height: 100 },
  thumbLabel: { padding: 8, backgroundColor: Colors.surface },
  thumbText: {
    fontSize: 11,
    fontWeight: FontWeight.medium,
    color: Colors.textSecondary,
    lineHeight: 15,
  },
  expandIcon: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 6,
    padding: 3,
  },
  userBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    borderRadius: 8,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCard: {
    width: 110,
    height: 130,
    borderRadius: Radius.lg,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: Colors.background,
    padding: 8,
  },
  addIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 12,
    fontWeight: FontWeight.bold,
    textAlign: 'center',
    lineHeight: 17,
  },
  addHint: {
    fontSize: 9,
    color: Colors.textSubtle,
    textAlign: 'center',
    lineHeight: 13,
  },
  expanded: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Colors.background,
  },
  expandedImage: {
    width: '100%',
    height: 260,
    backgroundColor: Colors.background,
  },
  expandedLabel: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    gap: 2,
  },
  expandedLabelText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.text,
  },
  expandedLabelHint: {
    fontSize: FontSize.xs,
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 48,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreenBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
  },
  emptyHintText: {
    fontSize: FontSize.xs,
    color: Colors.textSubtle,
    flex: 1,
    lineHeight: 16,
  },
  // Lightbox
  lightboxBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.94)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 1.4,
  },
  lightboxClose: {
    position: 'absolute',
    top: 52,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
