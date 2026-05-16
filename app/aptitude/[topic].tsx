import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { QuizCard } from '@/components/feature/QuizCard';
import { APTITUDE_TOPICS } from '@/services/aptitudeData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

export default function AptitudeTopicScreen() {
  const { topic } = useLocalSearchParams<{ topic: string }>();
  const topicData = APTITUDE_TOPICS.find(t => t.id === topic);
  const [activeTab, setActiveTab] = useState<'theory' | 'tricks' | 'quiz'>('theory');
  const [score, setScore] = useState({ correct: 0, total: 0 });

  if (!topicData) return (
    <View style={styles.container}>
      <Header title="Topic Not Found" />
    </View>
  );

  const handleAnswer = (correct: boolean) => {
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={[topicData.color, topicData.color + 'AA']} style={styles.hero}>
        <Header title={topicData.title} subtitle={topicData.category === 'quant' ? 'Quantitative Aptitude' : 'Logical Reasoning'} backgroundColor="transparent" textColor="#fff" />
        <Text style={styles.heroEmoji}>{topicData.icon}</Text>
      </LinearGradient>

      {/* Tabs */}
      <View style={styles.tabs}>
        {[{ id: 'theory', label: '📖 Theory' }, { id: 'tricks', label: '⚡ Shortcuts' }, { id: 'quiz', label: '🎯 Quiz' }].map(t => (
          <Pressable key={t.id} style={[styles.tab, activeTab === t.id && styles.tabActive]} onPress={() => setActiveTab(t.id as any)}>
            <Text style={[styles.tabText, activeTab === t.id && { color: topicData.color, fontWeight: FontWeight.semibold }]}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'theory' && (
          <View style={[styles.card, Shadow.sm]}>
            <Text style={styles.sectionTitle}>Theory & Concepts</Text>
            <Text style={styles.theoryText}>{topicData.theory}</Text>
          </View>
        )}

        {activeTab === 'tricks' && (
          <View style={[styles.card, Shadow.sm]}>
            <Text style={styles.sectionTitle}>⚡ Shortcut Tricks</Text>
            <View style={styles.tricksList}>
              {topicData.shortcutTricks.map((trick, i) => (
                <View key={i} style={[styles.trickItem, { borderLeftColor: topicData.color }]}>
                  <Text style={styles.trickNum}>#{i + 1}</Text>
                  <Text style={styles.trickText}>{trick}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {activeTab === 'quiz' && (
          <View style={styles.quizSection}>
            {score.total > 0 && (
              <View style={[styles.scoreCard, { borderColor: topicData.color }]}>
                <Text style={styles.scoreText}>Score: {score.correct}/{score.total}</Text>
                <Text style={styles.scorePct}>{Math.round((score.correct / score.total) * 100)}% Correct</Text>
              </View>
            )}
            {topicData.questions.map(q => (
              <QuizCard key={q.id} question={q} onAnswer={handleAnswer} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  hero: { paddingBottom: Spacing.xl, alignItems: 'center' },
  heroEmoji: { fontSize: 52, marginTop: -8 },
  tabs: { flexDirection: 'row', backgroundColor: Colors.surface, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center', borderBottomWidth: 3, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: Colors.primary },
  tabText: { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textSubtle },
  content: { padding: Spacing.md, gap: Spacing.md, paddingBottom: 32 },
  card: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.lg, gap: Spacing.md },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.text },
  theoryText: { fontSize: FontSize.md, color: Colors.textSecondary, lineHeight: 26 },
  tricksList: { gap: Spacing.sm },
  trickItem: { flexDirection: 'row', gap: Spacing.sm, padding: Spacing.md, backgroundColor: Colors.background, borderRadius: Radius.md, borderLeftWidth: 4 },
  trickNum: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.primary, minWidth: 24 },
  trickText: { flex: 1, fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
  quizSection: { gap: Spacing.md },
  scoreCard: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.md, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 2, ...Shadow.sm },
  scoreText: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.text },
  scorePct: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.success },
});
