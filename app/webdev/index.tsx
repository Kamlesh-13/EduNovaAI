import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { NotebookSection } from '@/components/feature/NotebookSection';
import { WEB_TECHNOLOGIES, WebTech } from '@/services/webdevData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const LEVEL_COLOR = { beginner: Colors.success, intermediate: Colors.warning, advanced: Colors.error };

const WEB_PLACEHOLDER_IMAGES = [
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
              storageKey="webdev"
              title="My Notebook — Web Dev Notes"
              subtitle="Code snippets and reference notes"
              placeholderImages={WEB_PLACEHOLDER_IMAGES}
              color="#4ECDC4"
            />
          </View>
        }
        renderItem={renderTech}
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
