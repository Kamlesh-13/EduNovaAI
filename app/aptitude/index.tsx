import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Header } from '@/components/layout/Header';
import { APTITUDE_TOPICS, AptitudeTopic } from '@/services/aptitudeData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const NOTEBOOK_IMAGES = [
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
  const [expandedNote, setExpandedNote] = useState<string | null>(null);

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
            images={NOTEBOOK_IMAGES}
            expandedNote={expandedNote}
            onToggle={setExpandedNote}
            color="#FF6B6B"
          />
        }
        renderItem={renderTopic}
      />
    </View>
  );
}

function NotebookSection({
  images, expandedNote, onToggle, color,
}: {
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
          <Text style={nbStyles.title}>My Notebook — Aptitude Notes</Text>
          <Text style={nbStyles.subtitle}>Shortcut tricks and solved examples</Text>
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
              </Pressable>
            ))}
            <Pressable style={nbStyles.addNoteCard}>
              <MaterialIcons name="add-photo-alternate" size={28} color={color} />
              <Text style={[nbStyles.addNoteText, { color }]}>Upload Your{'\n'}Notes</Text>
            </Pressable>
          </ScrollView>

          {expandedNote ? (
            <View style={nbStyles.expanded}>
              <Image
                source={{ uri: images.find(i => i.id === expandedNote)?.uri || '' }}
                style={nbStyles.expandedImage}
                contentFit="contain"
                transition={200}
              />
              <Pressable onPress={() => onToggle(null)} style={nbStyles.closeBtn} hitSlop={8}>
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
  thumbImage: { width: 130, height: 100 },
  thumbLabel: { padding: 8, backgroundColor: Colors.surface },
  thumbText: { fontSize: 11, fontWeight: FontWeight.medium, color: Colors.textSecondary, lineHeight: 15 },
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
  addNoteText: { fontSize: 11, fontWeight: FontWeight.medium, textAlign: 'center' },
  expanded: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    position: 'relative',
  },
  expandedImage: { width: '100%', height: 280, backgroundColor: Colors.background },
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
