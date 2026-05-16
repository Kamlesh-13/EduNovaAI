import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@/components/layout/Header';
import { WEB_TECHNOLOGIES } from '@/services/webdevData';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

export default function WebTechScreen() {
  const { tech } = useLocalSearchParams<{ tech: string }>();
  const router = useRouter();
  const techData = WEB_TECHNOLOGIES.find(t => t.id === tech);
  const [activeTab, setActiveTab] = useState<'lessons' | 'interview'>('lessons');
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [expandedQ, setExpandedQ] = useState<string | null>(null);

  if (!techData) return <View style={styles.container}><Header title="Not Found" /></View>;

  const DIFF_COLOR = { easy: Colors.success, medium: Colors.warning, hard: Colors.error };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={[techData.color + 'CC', techData.color + '88']} style={styles.hero}>
        <Header title={techData.title} subtitle={techData.subtitle} backgroundColor="transparent" textColor="#fff" />
        <Text style={styles.heroEmoji}>{techData.icon}</Text>
      </LinearGradient>

      <View style={styles.tabs}>
        {[{ id: 'lessons', label: '📖 Lessons' }, { id: 'interview', label: '💼 Interview Q' }].map(t => (
          <Pressable key={t.id} style={[styles.tab, activeTab === t.id && styles.tabActive]} onPress={() => setActiveTab(t.id as any)}>
            <Text style={[styles.tabText, activeTab === t.id && { color: Colors.primary, fontWeight: FontWeight.semibold }]}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'lessons' && techData.lessons.map(lesson => {
          const expanded = expandedLesson === lesson.id;
          return (
            <Pressable key={lesson.id} style={[styles.card, Shadow.sm]} onPress={() => setExpandedLesson(expanded ? null : lesson.id)}>
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <MaterialIcons name={expanded ? 'expand-less' : 'expand-more'} size={22} color={Colors.textSubtle} />
              </View>
              {expanded && (
                <View style={styles.lessonBody}>
                  <Text style={styles.lessonContent}>{lesson.content}</Text>
                  {lesson.codeExample && (
                    <View style={styles.codeBlock}>
                      <Text style={styles.codeLabel}>{lesson.language?.toUpperCase() || 'CODE'}</Text>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={styles.codeText}>{lesson.codeExample}</Text>
                      </ScrollView>
                    </View>
                  )}
                  <Text style={styles.keyPointsTitle}>Key Points</Text>
                  {lesson.keyPoints.map((kp, i) => (
                    <View key={i} style={styles.keyPoint}>
                      <MaterialIcons name="check-circle" size={16} color={Colors.success} />
                      <Text style={styles.keyPointText}>{kp}</Text>
                    </View>
                  ))}
                </View>
              )}
            </Pressable>
          );
        })}

        {activeTab === 'interview' && techData.interviewQuestions.map((q, i) => {
          const key = `iq-${i}`;
          const expanded = expandedQ === key;
          return (
            <Pressable key={key} style={[styles.card, Shadow.sm]} onPress={() => setExpandedQ(expanded ? null : key)}>
              <View style={styles.iqHeader}>
                <View style={[styles.diffDot, { backgroundColor: DIFF_COLOR[q.difficulty] }]} />
                <Text style={styles.iqQ} numberOfLines={expanded ? undefined : 2}>{q.q}</Text>
                <MaterialIcons name={expanded ? 'expand-less' : 'expand-more'} size={20} color={Colors.textSubtle} />
              </View>
              {expanded && (
                <View style={styles.iqAnswer}>
                  <Text style={styles.iqAnswerText}>{q.a}</Text>
                </View>
              )}
            </Pressable>
          );
        })}

        <Pressable onPress={() => router.push('/(tabs)/chat' as any)} style={styles.aiBtn}>
          <LinearGradient colors={['#4ECDC4', '#44A08D']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.aiBtnInner}>
            <Text style={styles.aiBtnText}>🤖 Ask AI for help with {techData.title}</Text>
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
  card: { backgroundColor: Colors.surface, borderRadius: Radius.xl, padding: Spacing.md, gap: Spacing.sm },
  lessonHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  lessonTitle: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.text, flex: 1 },
  lessonBody: { gap: Spacing.md, marginTop: 4 },
  lessonContent: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 22 },
  codeBlock: { backgroundColor: '#1A1040', borderRadius: Radius.md, padding: Spacing.md, gap: 8 },
  codeLabel: { fontSize: 10, color: '#4ECDC4', fontWeight: FontWeight.bold, letterSpacing: 1 },
  codeText: { fontSize: 13, color: '#E2E8F0', fontFamily: 'monospace', lineHeight: 20 },
  keyPointsTitle: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.primary },
  keyPoint: { flexDirection: 'row', gap: 8, alignItems: 'flex-start' },
  keyPointText: { flex: 1, fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
  iqHeader: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  diffDot: { width: 10, height: 10, borderRadius: 5, marginTop: 5, flexShrink: 0 },
  iqQ: { flex: 1, fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.text, lineHeight: 22 },
  iqAnswer: { backgroundColor: Colors.background, borderRadius: Radius.md, padding: Spacing.md, borderLeftWidth: 3, borderLeftColor: Colors.primary },
  iqAnswerText: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 22 },
  aiBtn: { borderRadius: Radius.xl, overflow: 'hidden', marginTop: 8 },
  aiBtnInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, padding: Spacing.md },
  aiBtnText: { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: '#fff' },
});
