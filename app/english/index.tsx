import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { NotebookSection } from '@/components/feature/NotebookSection';
import { ENGLISH_TOPICS, EnglishTopic } from '@/services/englishData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const CAT_COLORS: Record<string, string> = {
  grammar: '#45B7D1', vocabulary: '#10B981', speaking: '#F59E0B', writing: '#6C63FF',
};

const ENG_PLACEHOLDER_IMAGES = [
  {
    id: 'eng-notes-1',
    label: 'Tenses Chart',
    uri: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80',
  },
  {
    id: 'eng-notes-2',
    label: 'Parts of Speech',
    uri: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80',
  },
  {
    id: 'eng-notes-3',
    label: 'Subject-Verb Agreement',
    uri: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
  },
  {
    id: 'eng-notes-4',
    label: 'Prepositions Notes',
    uri: 'https://images.unsplash.com/photo-1543165796-5426273eaab3?w=400&q=80',
  },
  {
    id: 'eng-notes-5',
    label: 'Direct & Indirect Speech',
    uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
  },
  {
    id: 'eng-notes-6',
    label: 'Non-Finite Verbs',
    uri: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&q=80',
  },
  {
    id: 'eng-notes-7',
    label: 'Sentence Types',
    uri: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&q=80',
  },
];

export default function EnglishScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'grammar', 'vocabulary', 'speaking', 'writing'];
  const filtered = activeCategory === 'all' ? ENGLISH_TOPICS : ENGLISH_TOPICS.filter(t => t.category === activeCategory);

  const renderTopic = ({ item }: { item: EnglishTopic }) => (
    <Pressable
      style={({ pressed }) => [styles.card, Shadow.sm, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
      onPress={() => router.push(`/english/${item.id}` as any)}
    >
      <View style={[styles.iconBg, { backgroundColor: item.color + '20' }]}>
        <Text style={styles.topicEmoji}>{item.icon}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.topicTitle}>{item.title}</Text>
        <Text style={styles.topicSub}>{item.examples.length} Examples · {item.exercises.length} Exercises</Text>
        <View style={[styles.catBadge, { backgroundColor: CAT_COLORS[item.category] + '18' }]}>
          <Text style={[styles.catText, { color: CAT_COLORS[item.category] }]}>{item.category}</Text>
        </View>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.textSubtle} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#45B7D1', '#6C63FF']} style={styles.hero}>
        <Header title="English Coach" subtitle="Grammar & Speaking" backgroundColor="transparent" textColor="#fff" />
        <View style={styles.heroStats}>
          {[{ v: '15', l: 'Topics' }, { v: '80+', l: 'Exercises' }, { v: 'AI', l: 'Practice Partner' }].map((s, i) => (
            <View key={i} style={styles.heroStat}>
              <Text style={styles.heroStatVal}>{s.v}</Text>
              <Text style={styles.heroStatLbl}>{s.l}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* Category Filter */}
      <View style={styles.filterRow}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={c => c}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContent}
          renderItem={({ item }) => {
            const isActive = activeCategory === item;
            const color = item === 'all' ? Colors.primary : CAT_COLORS[item];
            return (
              <Pressable
                style={[styles.filterChip, isActive && { backgroundColor: color }]}
                onPress={() => setActiveCategory(item)}
              >
                <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={t => t.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* AI Practice CTA */}
            <Pressable style={styles.aiCTA} onPress={() => router.push('/(tabs)/chat' as any)}>
              <LinearGradient colors={['#45B7D1', '#6C63FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.aiCTAInner}>
                <Text style={styles.aiCTAEmoji}>🗣️</Text>
                <View>
                  <Text style={styles.aiCTATitle}>AI Conversation Practice</Text>
                  <Text style={styles.aiCTASub}>Chat in English, get instant corrections</Text>
                </View>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 'auto' }} />
              </LinearGradient>
            </Pressable>

            {/* Notebook Notes */}
            <NotebookSection
              storageKey="english"
              title="My Notebook — English Notes"
              subtitle="Grammar rules and vocabulary notes"
              placeholderImages={ENG_PLACEHOLDER_IMAGES}
              color="#45B7D1"
            />
          </View>
        }
        renderItem={renderTopic}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  hero: { paddingBottom: Spacing.xl },
  heroStats: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: Spacing.lg },
  heroStat: { alignItems: 'center', gap: 4 },
  heroStatVal: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: '#fff' },
  heroStatLbl: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.75)' },
  filterRow: { backgroundColor: Colors.surface, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  filterContent: { gap: 8, paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  filterChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: Radius.full, backgroundColor: Colors.background, borderWidth: 1, borderColor: Colors.border },
  filterText: { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textSecondary },
  filterTextActive: { color: '#fff' },
  list: { padding: Spacing.md, gap: Spacing.sm, paddingBottom: 32 },
  aiCTA: { borderRadius: Radius.xl, overflow: 'hidden', marginBottom: Spacing.md },
  aiCTAInner: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, padding: Spacing.md },
  aiCTAEmoji: { fontSize: 32 },
  aiCTATitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: '#fff' },
  aiCTASub: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.8)' },
  card: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.md },
  iconBg: { width: 52, height: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  topicEmoji: { fontSize: 26 },
  cardContent: { flex: 1, gap: 4 },
  topicTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.text },
  topicSub: { fontSize: FontSize.xs, color: Colors.textSubtle },
  catBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full, alignSelf: 'flex-start', marginTop: 2 },
  catText: { fontSize: 10, fontWeight: FontWeight.bold, textTransform: 'capitalize' },
});
