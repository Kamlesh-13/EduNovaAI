import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TextInput, Pressable, FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { FormulaCard } from '@/components/feature/FormulaCard';
import { MATH_CATEGORIES, FORMULAS, searchFormulas } from '@/services/mathData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

export default function MathScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

      {/* Formulas List */}
      <FlatList
        data={filtered}
        keyExtractor={f => f.id}
        contentContainerStyle={styles.formulasList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyText}>No formulas found for "{search}"</Text>
          </View>
        }
        renderItem={({ item }) => <FormulaCard formula={item} />}
      />
    </View>
  );
}

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
