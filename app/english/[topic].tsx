import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { ENGLISH_TOPICS } from '@/services/englishData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

export default function EnglishTopicScreen() {
  const { topic } = useLocalSearchParams<{ topic: string }>();
  const router = useRouter();
  const topicData = ENGLISH_TOPICS.find(t => t.id === topic);
  const [activeTab, setActiveTab] = useState<'theory' | 'examples' | 'exercises'>('theory');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!topicData) return <View style={styles.container}><Header title="Not Found" /></View>;

  const handleReveal = (id: string) => setRevealed(p => ({ ...p, [id]: true }));

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={[topicData.color, topicData.color + '88']} style={styles.hero}>
        <Header title={topicData.title} subtitle={topicData.category} backgroundColor="transparent" textColor="#fff" />
        <Text style={styles.heroEmoji}>{topicData.icon}</Text>
      </LinearGradient>

      <View style={styles.tabs}>
        {[{ id: 'theory', label: '📖 Rules' }, { id: 'examples', label: '✨ Examples' }, { id: 'exercises', label: '✏️ Practice' }].map(t => (
          <Pressable key={t.id} style={[styles.tab, activeTab === t.id && styles.tabActive]} onPress={() => setActiveTab(t.id as any)}>
            <Text style={[styles.tabText, activeTab === t.id && { color: topicData.color, fontWeight: FontWeight.semibold }]}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'theory' && (
          <View style={[styles.card, Shadow.sm]}>
            <Text style={styles.sectionTitle}>Theory & Rules</Text>
            <Text style={styles.theoryText}>{topicData.theory}</Text>
            <View style={styles.rulesDivider} />
            <Text style={styles.rulesTitle}>Key Rules</Text>
            {topicData.rules.map((rule, i) => (
              <View key={i} style={styles.ruleItem}>
                <View style={[styles.ruleDot, { backgroundColor: topicData.color }]} />
                <Text style={styles.ruleText}>{rule}</Text>
              </View>
            ))}
          </View>
        )}

        {activeTab === 'examples' && topicData.examples.map((ex, i) => (
          <View key={i} style={[styles.card, Shadow.sm]}>
            <Text style={styles.exampleLabel}>Example {i + 1}</Text>
            {ex.incorrect && (
              <View style={styles.wrongSentence}>
                <MaterialIcons name="cancel" size={16} color={Colors.error} />
                <Text style={styles.wrongText}>{ex.incorrect}</Text>
              </View>
            )}
            <View style={styles.correctSentence}>
              <MaterialIcons name="check-circle" size={16} color={Colors.success} />
              <Text style={styles.correctText}>{ex.correct}</Text>
            </View>
            <View style={styles.explanationBox}>
              <MaterialIcons name="lightbulb" size={14} color={Colors.warning} />
              <Text style={styles.explanationText}>{ex.explanation}</Text>
            </View>
          </View>
        ))}

        {activeTab === 'exercises' && topicData.exercises.map((ex) => (
          <View key={ex.id} style={[styles.card, Shadow.sm]}>
            <View style={styles.exTypeRow}>
              <Text style={styles.exType}>{ex.type.replace('-', ' ').toUpperCase()}</Text>
            </View>
            <Text style={styles.exQuestion}>{ex.question}</Text>

            {ex.options && ex.options.map((opt, i) => {
              const isRevealed = revealed[ex.id];
              const isCorrect = opt === ex.answer;
              const wasSelected = answers[ex.id] === opt;
              return (
                <Pressable
                  key={i}
                  style={[
                    styles.option,
                    isRevealed && isCorrect && styles.optionCorrect,
                    isRevealed && wasSelected && !isCorrect && styles.optionWrong,
                  ]}
                  onPress={() => { if (!revealed[ex.id]) { setAnswers(p => ({ ...p, [ex.id]: opt })); } }}
                >
                  <Text style={[styles.optionText, isRevealed && isCorrect && { color: Colors.success }, isRevealed && wasSelected && !isCorrect && { color: Colors.error }]}>
                    {opt}
                  </Text>
                </Pressable>
              );
            })}

            {!revealed[ex.id] && (
              <Pressable style={styles.revealBtn} onPress={() => handleReveal(ex.id)}>
                <Text style={styles.revealBtnText}>Reveal Answer</Text>
              </Pressable>
            )}

            {revealed[ex.id] && (
              <View style={styles.answerBox}>
                <Text style={styles.answerLabel}>Answer: </Text>
                <Text style={styles.answerText}>{ex.answer}</Text>
              </View>
            )}
            {revealed[ex.id] && (
              <View style={styles.explanationBox}>
                <MaterialIcons name="lightbulb" size={14} color={Colors.warning} />
                <Text style={styles.explanationText}>{ex.explanation}</Text>
              </View>
            )}
          </View>
        ))}

        <Pressable onPress={() => router.push('/(tabs)/chat' as any)} style={styles.aiBtn}>
          <LinearGradient colors={['#45B7D1', '#6C63FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.aiBtnInner}>
            <Text style={styles.aiBtnText}>🗣️ Practice English with AI Coach</Text>
            <MaterialIcons name="arrow-forward" size={18} color="#fff" />
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  hero: { paddingBottom: Spacing.xl, alignItems: 'center' },
  heroEmoji: { fontSize: 52, marginTop: -4 },
  tabs: { flexDirection: 'row', backgroundColor: Colors.surface, borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center', borderBottomWidth: 3, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: Colors.primary },
  tabText: { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textSubtle },
  content: { padding: Spacing.md, gap: Spacing.sm, paddingBottom: 32 },
  card: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.lg, gap: Spacing.sm },
  sectionTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.text },
  theoryText: { fontSize: FontSize.md, color: Colors.textSecondary, lineHeight: 26 },
  rulesDivider: { height: 1, backgroundColor: Colors.borderLight },
  rulesTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.primary },
  ruleItem: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  ruleDot: { width: 8, height: 8, borderRadius: 4, marginTop: 7, flexShrink: 0 },
  ruleText: { flex: 1, fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 22 },
  exampleLabel: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, color: Colors.textSubtle, textTransform: 'uppercase', letterSpacing: 0.5 },
  wrongSentence: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', padding: 10, backgroundColor: '#FEF2F2', borderRadius: Radius.md },
  wrongText: { flex: 1, fontSize: FontSize.sm, color: Colors.error, lineHeight: 20 },
  correctSentence: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', padding: 10, backgroundColor: '#ECFDF5', borderRadius: Radius.md },
  correctText: { flex: 1, fontSize: FontSize.sm, color: Colors.success, lineHeight: 20 },
  explanationBox: { flexDirection: 'row', gap: 8, padding: 10, backgroundColor: '#FFFBEB', borderRadius: Radius.md, alignItems: 'flex-start' },
  explanationText: { flex: 1, fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
  exTypeRow: { marginBottom: 4 },
  exType: { fontSize: 10, fontWeight: FontWeight.bold, color: Colors.primary, letterSpacing: 0.5 },
  exQuestion: { fontSize: FontSize.md, fontWeight: FontWeight.medium, color: Colors.text, lineHeight: 24 },
  option: { padding: 12, borderRadius: Radius.md, backgroundColor: Colors.background, borderWidth: 1.5, borderColor: Colors.border },
  optionCorrect: { backgroundColor: '#ECFDF5', borderColor: Colors.success },
  optionWrong: { backgroundColor: '#FEF2F2', borderColor: Colors.error },
  optionText: { fontSize: FontSize.sm, color: Colors.text },
  revealBtn: { padding: 12, borderRadius: Radius.md, backgroundColor: Colors.surfaceSecondary, alignItems: 'center' },
  revealBtnText: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.primary },
  answerBox: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#ECFDF5', borderRadius: Radius.md },
  answerLabel: { fontSize: FontSize.sm, fontWeight: FontWeight.bold, color: Colors.success },
  answerText: { fontSize: FontSize.sm, color: Colors.success, flex: 1 },
  aiBtn: { borderRadius: Radius.xl, overflow: 'hidden', marginTop: 8 },
  aiBtnInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, padding: Spacing.md },
  aiBtnText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: '#fff' },
});
