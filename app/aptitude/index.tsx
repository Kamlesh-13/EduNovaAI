import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { NotebookSection } from '@/components/feature/NotebookSection';
import { APTITUDE_TOPICS, AptitudeTopic } from '@/services/aptitudeData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const APT_PLACEHOLDER_IMAGES = [
  {
    id: 'apt-notes-1',
    label: 'Percentage Tricks',
    uri: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
  },
  {
    id: 'apt-notes-2',
    label: 'Time & Work Shortcuts',
    uri: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80',
  },
  {
    id: 'apt-notes-3',
    label: 'Ratio & Proportion',
    uri: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&q=80',
  },
  {
    id: 'apt-notes-4',
    label: 'Logical Reasoning',
    uri: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80',
  },
];

export default function AptitudeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'quant' | 'reasoning'>('quant');

  const topics = APTITUDE_TOPICS.filter(t => t.category === activeTab);

  const renderTopic = ({ item }: { item: AptitudeTopic }) => (
    <Pressable
      style={({ pressed }) => [styles.topicCard, Shadow.sm, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
      onPress={() => router.push(`/aptitude/${item.id}` as any)}
    >
      <View style={[styles.topicIconBg, { backgroundColor: item.color + '22' }]}>
        <Text style={styles.topicIcon}>{item.icon}</Text>
      </View>
      <View style={styles.topicContent}>
        <Text style={styles.topicTitle}>{item.title}</Text>
        <Text style={styles.topicCount}>{item.questions.length} MCQ Questions</Text>
      </View>
      <View style={styles.topicRight}>
        <View style={[styles.diffBadge, { backgroundColor: item.color + '18' }]}>
          <Text style={[styles.diffText, { color: item.color }]}>
            {item.category === 'quant' ? 'Quant' : 'Reasoning'}
          </Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.textSubtle} />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#FF6B6B', '#FF8E53']} style={styles.heroGradient}>
        <Header
          title="Aptitude"
          subtitle="Reasoning & Quantitative"
          backgroundColor="transparent"
          textColor="#fff"
        />
        <View style={styles.heroRow}>
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValue}>13</Text>
            <Text style={styles.heroStatLabel}>Topics</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValue}>50+</Text>
            <Text style={styles.heroStatLabel}>MCQ Questions</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValue}>3</Text>
            <Text style={styles.heroStatLabel}>Difficulty Levels</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Tabs */}
      <View style={styles.tabs}>
        {[
          { id: 'quant', label: '🔢 Quantitative' },
          { id: 'reasoning', label: '🧩 Reasoning' },
        ].map(tab => (
          <Pressable
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.tabActive]}
            onPress={() => setActiveTab(tab.id as any)}
          >
            <Text style={[styles.tabText, activeTab === tab.id && styles.tabTextActive]}>
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={topics}
        keyExtractor={t => t.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <NotebookSection
            storageKey="aptitude"
            title="My Notebook — Aptitude Notes"
            subtitle="Shortcut tricks and solved examples"
            placeholderImages={APT_PLACEHOLDER_IMAGES}
            color="#FF6B6B"
          />
        }
        renderItem={renderTopic}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  heroGradient: { paddingBottom: Spacing.xl },
  heroRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
  },
  heroStat: { alignItems: 'center', gap: 4 },
  heroStatValue: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: '#fff' },
  heroStatLabel: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.75)' },
  heroDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.25)', height: 40, alignSelf: 'center' },
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: { borderBottomColor: '#FF6B6B' },
  tabText: { fontSize: FontSize.md, fontWeight: FontWeight.medium, color: Colors.textSubtle },
  tabTextActive: { color: '#FF6B6B', fontWeight: FontWeight.semibold },
  list: { padding: Spacing.md, gap: Spacing.sm, paddingBottom: 32 },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.md,
  },
  topicIconBg: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicIcon: { fontSize: 24 },
  topicContent: { flex: 1, gap: 4 },
  topicTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.text },
  topicCount: { fontSize: FontSize.xs, color: Colors.textSubtle },
  topicRight: { alignItems: 'flex-end', gap: 8 },
  diffBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full },
  diffText: { fontSize: 10, fontWeight: FontWeight.bold },
});
