import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Header } from '@/components/layout/Header';
import { WEB_TECHNOLOGIES, WebTech } from '@/services/webdevData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const LEVEL_COLOR = { beginner: Colors.success, intermediate: Colors.warning, advanced: Colors.error };

const NOTEBOOK_IMAGES = [
  {
    id: 'web-notes-1',
    label: 'HTML Structure',
    uri: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
  },
  {
    id: 'web-notes-2',
    label: 'CSS Flexbox & Grid',
    uri: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80',
  },
  {
    id: 'web-notes-3',
    label: 'JavaScript ES6',
    uri: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80',
  },
  {
    id: 'web-notes-4',
    label: 'React Hooks',
    uri: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
  },
];

export default function WebDevScreen() {
  const router = useRouter();
  const [expandedNote, setExpandedNote] = useState<string | null>(null);

  const renderTech = ({ item }: { item: WebTech }) => (
    <Pressable
      style={({ pressed }) => [styles.card, Shadow.sm, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
      onPress={() => router.push(`/webdev/${item.id}` as any)}
    >
      <View style={[styles.iconBg, { backgroundColor: item.color + '18' }]}>
        <Text style={styles.techEmoji}>{item.icon}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.techTitle}>{item.title}</Text>
        <Text style={styles.techSubtitle}>{item.subtitle}</Text>
        <View style={styles.cardMeta}>
          <View style={[styles.levelBadge, { backgroundColor: LEVEL_COLOR[item.level] + '18' }]}>
            <Text style={[styles.levelText, { color: LEVEL_COLOR[item.level] }]}>{item.level}</Text>
          </View>
          <Text style={styles.lessonCount}>{item.lessons.length} Lessons · {item.interviewQuestions.length} Interview Q</Text>
        </View>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.textSubtle} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#4ECDC4', '#44A08D']} style={styles.hero}>
        <Header title="Web Development" subtitle="AI Coding Assistant" backgroundColor="transparent" textColor="#fff" />
        <View style={styles.heroStats}>
          {[{ v: '5', l: 'Technologies' }, { v: '12+', l: 'Lessons' }, { v: '10+', l: 'Interview Q' }].map((s, i) => (
            <View key={i} style={styles.heroStat}>
              <Text style={styles.heroStatVal}>{s.v}</Text>
              <Text style={styles.heroStatLbl}>{s.l}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      <FlatList
        data={WEB_TECHNOLOGIES}
        keyExtractor={t => t.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* AI Doubt Solver CTA */}
            <Pressable
              style={styles.chatCTA}
              onPress={() => router.push('/(tabs)/chat' as any)}
            >
              <LinearGradient colors={['#4ECDC4', '#44A08D']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.chatCTAInner}>
                <Text style={styles.chatCTAEmoji}>🤖</Text>
                <View>
                  <Text style={styles.chatCTATitle}>AI Doubt Solver</Text>
                  <Text style={styles.chatCTASub}>Ask any coding question instantly</Text>
                </View>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 'auto' }} />
              </LinearGradient>
            </Pressable>

            {/* Notebook Notes */}
            <NotebookSection
              images={NOTEBOOK_IMAGES}
              expandedNote={expandedNote}
              onToggle={setExpandedNote}
              color="#4ECDC4"
            />
          </View>
        }
        renderItem={renderTech}
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
          <Text style={nbStyles.title}>My Notebook — Web Dev Notes</Text>
          <Text style={nbStyles.subtitle}>Code snippets and reference notes</Text>
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
  badge: { width: 44, height: 44, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  badgeEmoji: { fontSize: 22 },
  headerText: { flex: 1, gap: 2 },
  title: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.text },
  subtitle: { fontSize: FontSize.xs, color: Colors.textSubtle },
  scrollContent: { gap: Spacing.sm, paddingHorizontal: Spacing.md, paddingBottom: Spacing.md },
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
  hero: { paddingBottom: Spacing.xl },
  heroStats: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: Spacing.lg },
  heroStat: { alignItems: 'center', gap: 4 },
  heroStatVal: { fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold, color: '#fff' },
  heroStatLbl: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.75)' },
  list: { padding: Spacing.md, gap: Spacing.sm, paddingBottom: 32 },
  chatCTA: { borderRadius: Radius.xl, overflow: 'hidden', marginBottom: Spacing.md },
  chatCTAInner: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, padding: Spacing.md },
  chatCTAEmoji: { fontSize: 32 },
  chatCTATitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: '#fff' },
  chatCTASub: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.8)' },
  card: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.md },
  iconBg: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  techEmoji: { fontSize: 28 },
  cardContent: { flex: 1, gap: 4 },
  techTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.text },
  techSubtitle: { fontSize: FontSize.xs, color: Colors.textSubtle },
  cardMeta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  levelBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full },
  levelText: { fontSize: 10, fontWeight: FontWeight.bold, textTransform: 'uppercase' },
  lessonCount: { fontSize: FontSize.xs, color: Colors.textSubtle },
});
