import React from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '@/hooks/useAuth';
import { useApp } from '@/hooks/useApp';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const WEEK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const ACTIVITY = [true, true, false, true, true, true, false];

const MODULE_PROGRESS = [
  { name: 'Mathematics', emoji: '📐', progress: 0.65, color: '#6C63FF', topics: 5, total: 8 },
  { name: 'Aptitude', emoji: '🧠', progress: 0.43, color: '#FF6B6B', topics: 3, total: 7 },
  { name: 'Web Development', emoji: '💻', progress: 0.2, color: '#4ECDC4', topics: 1, total: 5 },
  { name: 'English', emoji: '🗣️', progress: 0.8, color: '#45B7D1', topics: 4, total: 5 },
];

const BADGES = [
  { emoji: '🥇', title: 'First Login', earned: true },
  { emoji: '🔥', title: '7-Day Streak', earned: true },
  { emoji: '📐', title: 'Math Master', earned: true },
  { emoji: '🧠', title: 'Aptitude Pro', earned: false },
  { emoji: '💻', title: 'Code Ninja', earned: false },
  { emoji: '🗣️', title: 'English Expert', earned: false },
];

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const { isDarkMode } = useApp();

  const totalProgress = MODULE_PROGRESS.reduce((acc, m) => acc + m.progress, 0) / MODULE_PROGRESS.length;

  return (
    <View style={[styles.container, { paddingTop: insets.top }, isDarkMode && styles.darkContainer]}>
      <StatusBar style="light" />

      <LinearGradient
        colors={['#1A1040', '#2D1B69']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>📊 My Progress</Text>
        <Text style={styles.headerSubtitle}>Keep learning, keep growing!</Text>
      </LinearGradient>

      <ScrollView
        style={[styles.scrollView, isDarkMode && { backgroundColor: Colors.darkBg }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Overall Progress */}
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={[styles.cardTitle, isDarkMode && styles.darkText]}>Overall Progress</Text>
          <View style={styles.circleContainer}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressPct}>{Math.round(totalProgress * 100)}%</Text>
              <Text style={styles.progressLabel}>Complete</Text>
            </View>
          </View>
          <View style={styles.statsGrid}>
            {[
              { icon: '🔥', value: `${user?.streak || 7}`, label: 'Day Streak' },
              { icon: '⭐', value: `${user?.totalPoints || 1250}`, label: 'Total Points' },
              { icon: '📚', value: `${user?.completedLessons || 24}`, label: 'Lessons Done' },
              { icon: '⏱️', value: '14h', label: 'Study Time' },
            ].map((s, i) => (
              <View key={i} style={[styles.statCard, isDarkMode && styles.darkStatCard]}>
                <Text style={styles.statCardIcon}>{s.icon}</Text>
                <Text style={[styles.statCardValue, isDarkMode && styles.darkText]}>{s.value}</Text>
                <Text style={[styles.statCardLabel, isDarkMode && styles.darkSubText]}>{s.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Weekly Activity */}
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={[styles.cardTitle, isDarkMode && styles.darkText]}>📅 Weekly Activity</Text>
          <Text style={[styles.cardSubtitle, isDarkMode && styles.darkSubText]}>
            This week's study sessions
          </Text>
          <View style={styles.weekRow}>
            {WEEK_DAYS.map((day, i) => (
              <View key={i} style={styles.dayCol}>
                <View style={[styles.dayDot, ACTIVITY[i] ? styles.dayDotActive : styles.dayDotInactive]} />
                <Text style={[styles.dayLabel, isDarkMode && styles.darkSubText]}>{day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Module Progress */}
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={[styles.cardTitle, isDarkMode && styles.darkText]}>🎯 Module Progress</Text>
          <View style={styles.moduleList}>
            {MODULE_PROGRESS.map((module, i) => (
              <View key={i} style={styles.moduleItem}>
                <View style={styles.moduleTopRow}>
                  <View style={styles.moduleLeft}>
                    <Text style={styles.moduleEmoji}>{module.emoji}</Text>
                    <Text style={[styles.moduleName, isDarkMode && styles.darkText]}>{module.name}</Text>
                  </View>
                  <Text style={[styles.moduleCount, isDarkMode && styles.darkSubText]}>
                    {module.topics}/{module.total} topics
                  </Text>
                </View>
                <View style={styles.progressBarBg}>
                  <View
                    style={[styles.progressBarFill, {
                      width: `${module.progress * 100}%`,
                      backgroundColor: module.color,
                    }]}
                  />
                </View>
                <Text style={[styles.modulePercent, { color: module.color }]}>
                  {Math.round(module.progress * 100)}%
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Badges */}
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={[styles.cardTitle, isDarkMode && styles.darkText]}>🏆 Badges & Achievements</Text>
          <View style={styles.badgesGrid}>
            {BADGES.map((badge, i) => (
              <View
                key={i}
                style={[styles.badge, !badge.earned && styles.badgeLocked, isDarkMode && styles.darkBadge]}
              >
                <Text style={[styles.badgeEmoji, !badge.earned && styles.badgeEmojiLocked]}>
                  {badge.emoji}
                </Text>
                <Text style={[
                  styles.badgeTitle,
                  !badge.earned && styles.badgeTitleLocked,
                  isDarkMode && styles.darkText,
                ]}>
                  {badge.title}
                </Text>
                {!badge.earned && (
                  <MaterialIcons name="lock" size={12} color={Colors.textSubtle} />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  darkContainer: { backgroundColor: Colors.darkBg },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  scrollView: { flex: 1, backgroundColor: Colors.background },
  scrollContent: {
    padding: Spacing.md,
    gap: Spacing.md,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.lg,
    gap: Spacing.md,
    ...Shadow.sm,
  },
  darkCard: { backgroundColor: Colors.darkCard },
  darkText: { color: Colors.darkText },
  darkSubText: { color: Colors.darkTextSubtle },
  cardTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.text,
  },
  cardSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSubtle,
    marginTop: -8,
  },
  circleContainer: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 8,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPct: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.extrabold,
    color: Colors.primary,
  },
  progressLabel: {
    fontSize: FontSize.xs,
    color: Colors.textSubtle,
    fontWeight: FontWeight.medium,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: Radius.md,
    padding: Spacing.sm,
    alignItems: 'center',
    gap: 2,
  },
  darkStatCard: { backgroundColor: Colors.darkSurface },
  statCardIcon: { fontSize: 20 },
  statCardValue: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.text,
  },
  statCardLabel: {
    fontSize: 10,
    color: Colors.textSubtle,
    textAlign: 'center',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCol: {
    alignItems: 'center',
    gap: 6,
  },
  dayDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayDotActive: {
    backgroundColor: Colors.primary,
  },
  dayDotInactive: {
    backgroundColor: Colors.borderLight,
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: FontWeight.medium,
    color: Colors.textSubtle,
  },
  moduleList: { gap: Spacing.md },
  moduleItem: { gap: 8 },
  moduleTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moduleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  moduleEmoji: { fontSize: 18 },
  moduleName: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.text,
  },
  moduleCount: {
    fontSize: FontSize.xs,
    color: Colors.textSubtle,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: Colors.borderLight,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: Radius.full,
  },
  modulePercent: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    textAlign: 'right',
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  badge: {
    width: '30%',
    backgroundColor: Colors.background,
    borderRadius: Radius.lg,
    padding: Spacing.sm,
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  darkBadge: { backgroundColor: Colors.darkSurface, borderColor: Colors.darkBorder },
  badgeLocked: {
    opacity: 0.5,
  },
  badgeEmoji: { fontSize: 28 },
  badgeEmojiLocked: { opacity: 0.4 },
  badgeTitle: {
    fontSize: 11,
    fontWeight: FontWeight.medium,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  badgeTitleLocked: { color: Colors.textSubtle },
});
