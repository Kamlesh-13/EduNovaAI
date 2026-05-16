import React, { memo } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Radius, Shadow, FontSize, FontWeight, Spacing } from '@/constants/theme';

interface ModuleCardProps {
  title: string;
  subtitle: string;
  icon: string;
  emoji: string;
  colorStart: string;
  colorEnd: string;
  lessonCount?: number;
  onPress: () => void;
}

export const ModuleCard = memo(({
  title, subtitle, icon, emoji, colorStart, colorEnd, lessonCount, onPress,
}: ModuleCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { transform: [{ scale: 0.97 }], opacity: 0.95 },
      ]}
    >
      <LinearGradient
        colors={[colorStart, colorEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {/* Background Emoji */}
        <Text style={styles.bgEmoji}>{emoji}</Text>

        {/* Top Row */}
        <View style={styles.topRow}>
          <View style={styles.iconCircle}>
            <MaterialIcons name={icon as any} size={22} color="#fff" />
          </View>
          <MaterialIcons name="arrow-forward-ios" size={14} color="rgba(255,255,255,0.7)" />
        </View>

        {/* Text */}
        <View style={styles.textArea}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {lessonCount && (
            <Text style={styles.count}>{lessonCount} Topics</Text>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '45%',
    maxWidth: '50%',
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.md,
  },
  gradient: {
    padding: Spacing.md,
    paddingBottom: Spacing.lg,
    minHeight: 160,
    overflow: 'hidden',
    position: 'relative',
  },
  bgEmoji: {
    position: 'absolute',
    right: -8,
    bottom: -8,
    fontSize: 72,
    opacity: 0.25,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    gap: 4,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: '#fff',
    lineHeight: 22,
  },
  subtitle: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 16,
  },
  count: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
    fontWeight: FontWeight.medium,
  },
});
