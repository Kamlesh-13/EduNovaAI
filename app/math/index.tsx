import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TextInput, Pressable, FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Header } from '@/components/layout/Header';
import { FormulaCard } from '@/components/feature/FormulaCard';
import { MATH_CATEGORIES, FORMULAS, searchFormulas } from '@/services/mathData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

// Placeholder notebook pages - replace with real uploaded notebook images
const NOTEBOOK_IMAGES = [
  {
    id: 'math-notes-1',
    label: 'Algebra Formulas',
    uri: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
  },
  {
    id: 'math-notes-2',
    label: 'Trigonometry',
    uri: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&q=80',
  },
  {
    id: 'math-notes-3',
    label: 'Geometry & Mensuration',
    uri: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&q=80',
  },
  {
    id: 'math-notes-4',
    label: 'Calculus Basics',
    uri: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&q=80',
  },
];

export default function MathScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedNote, setExpandedNote] = useState<string | null>(null);

  const filtered = search.trim()
    ? searchFormulas(search)
    : activeCategory
      ? FORMULAS.filter(f => f.category === activeCategory)
      : FORMULAS;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#6C63FF', '#A855F7']} style={styles.heroGradient}>
        <Header
          title="Mathematics"
          subtitle="Formulas & Algorithms"
          backgroundColor="transparent"
          textColor="#fff"
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroEmoji}>📐</Text>
          <Text style={styles.heroText}>{FORMULAS.length} Formulas · 8 Categories</Text>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={20} color={Colors.textSubtle} />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search formulas..."
            placeholderTextColor={Colors.textSubtle}
            accessibilityLabel="Search formulas"
          />
          {search ? (
            <Pressable onPress={() => setSearch('')} hitSlop={8}>
              <MaterialIcons name="close" size={18} color={Colors.textSubtle} />
            </Pressable>
          ) : null}
        </View>
      </LinearGradient>

      {/* Categories */}
      <View style={styles.categoriesOuter}>
        <FlatList
          horizontal
          data={[{ id: null, title: 'All', icon: '✨', color: Colors.primary }, ...MATH_CATEGORIES]}
          keyExtractor={c => c.id || 'all'}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContent}
          renderItem={({ item }) => {
            const isActive = activeCategory === item.id;
            return (
              <Pressable
                style={[styles.categoryChip, isActive && { backgroundColor: item.color }]}
                onPress={() => setActiveCategory(item.id)}
              >
                <Text style={styles.categoryChipIcon}>{item.icon}</Text>
                <Text style={[styles.categoryChipText, isActive && styles.categoryChipTextActive]}>
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      {/* Formulas + Notebook Notes */}
      <FlatList
        data={filtered}
        keyExtractor={f => f.id}
        contentContainerStyle={styles.formulasList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <NotebookSection
            title="📓 My Notebook — Math Notes"
            subtitle="Handwritten notes from your notebook"
            images={NOTEBOOK_IMAGES}
            expandedNote={expandedNote}
            onToggle={setExpandedNote}
            color="#6C63FF"
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyText}>{"No formulas found for \"" + search + "\""}</Text>
          </View>
        }
        renderItem={({ item }) => <FormulaCard formula={item} />}
      />
    </View>
  );
}

function NotebookSection({
  title, subtitle, images, expandedNote, onToggle, color,
}: {
  title: string;
  subtitle: string;
  images: { id: string; label: string; uri: string }[];
  expandedNote: string | null;
  onToggle: (id: string | null) => void;
  color: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View style={nbStyles.container}>
      <Pressable
        onPress={() => setIsOpen(v => !v)}
        style={({ pressed }) => [nbStyles.header, pressed && { opacity: 0.85 }]}
      >
        <View style={[nbStyles.badge, { backgroundColor: color + '20' }]}>
          <Text style={nbStyles.badgeEmoji}>📓</Text>
        </View>
        <View style={nbStyles.headerText}>
          <Text style={nbStyles.title}>{title}</Text>
          <Text style={nbStyles.subtitle}>{subtitle}</Text>
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
            contentContainerStyle={nbStyles.scrollContent}
          >
            {images.map((img) => (
              <Pressable
                key={img.id}
                onPress={() => onToggle(expandedNote === img.id ? null : img.id)}
                style={({ pressed }) => [nbStyles.thumb, pressed && { opacity: 0.9 }]}
              >
                <Image
                  source={{ uri: img.uri }}
                  style={nbStyles.thumbImage}
                  contentFit="cover"
                  transition={200}
                />
                <View style={nbStyles.thumbLabel}>
                  <Text style={nbStyles.thumbText} numberOfLines={2}>{img.label}</Text>
                </View>
                {expandedNote === img.id ? (
                  <View style={nbStyles.expandedBadge}>
                    <MaterialIcons name="fullscreen" size={14} color="#fff" />
                  </View>
                ) : null}
              </Pressable>
            ))}

            {/* Add Notes Placeholder */}
            <Pressable style={nbStyles.addNoteCard}>
              <MaterialIcons name="add-photo-alternate" size={28} color={color} />
              <Text style={[nbStyles.addNoteText, { color }]}>Upload Your{'\n'}Notes</Text>
            </Pressable>
          </ScrollView>

          {/* Expanded Image */}
          {expandedNote ? (
            <View style={nbStyles.expanded}>
              <Image
                source={{ uri: images.find(i => i.id === expandedNote)?.uri || '' }}
                style={nbStyles.expandedImage}
                contentFit="contain"
                transition={200}
              />
              <Pressable
                onPress={() => onToggle(null)}
                style={nbStyles.closeBtn}
                hitSlop={8}
              >
                <MaterialIcons name="close" size={20} color="#fff" />
              </Pressable>
            </View>
          ) : null}
        </>
      ) : null}
    </View>
  );
}

const nbStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    marginBottom: Spacing.md,
    overflow: 'hidden',
    ...Shadow.sm,
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
  },
  thumbImage: {
    width: 130,
    height: 100,
  },
  thumbLabel: {
    padding: 8,
    backgroundColor: Colors.surface,
  },
  thumbText: {
    fontSize: 11,
    fontWeight: FontWeight.medium,
    color: Colors.textSecondary,
    lineHeight: 15,
  },
  expandedBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    padding: 3,
  },
  addNoteCard: {
    width: 100,
    height: 130,
    borderRadius: Radius.lg,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.background,
  },
  addNoteText: {
    fontSize: 11,
    fontWeight: FontWeight.medium,
    textAlign: 'center',
  },
  expanded: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    position: 'relative',
  },
  expandedImage: {
    width: '100%',
    height: 280,
    backgroundColor: Colors.background,
  },
  closeBtn: {
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
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  heroGradient: { paddingBottom: Spacing.xl },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  heroEmoji: { fontSize: 28 },
  heroText: { color: 'rgba(255,255,255,0.85)', fontSize: FontSize.sm },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    marginHorizontal: Spacing.lg,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.text,
    includeFontPadding: false,
  },
  categoriesOuter: {
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  categoriesContent: {
    gap: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.full,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  categoryChipIcon: { fontSize: 16 },
  categoryChipText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.textSecondary,
  },
  categoryChipTextActive: { color: '#fff' },
  formulasList: {
    padding: Spacing.md,
    paddingBottom: 32,
  },
  emptyState: {
    alignItems: 'center',
    padding: Spacing.xxl,
    gap: Spacing.md,
  },
  emptyEmoji: { fontSize: 52 },
  emptyText: {
    fontSize: FontSize.md,
    color: Colors.textSubtle,
    textAlign: 'center',
  },
});
