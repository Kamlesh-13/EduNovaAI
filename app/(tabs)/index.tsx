import React, { useRef, useEffect } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Animated, Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useAuth } from '@/hooks/useAuth';
import { useApp } from '@/hooks/useApp';
import { ModuleCard } from '@/components/feature/ModuleCard';
import { MODULES, GREETINGS } from '@/constants/config';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const GREETING = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];

const QUICK_TIPS = [
  { icon: '⚡', tip: 'Practice 20 mins daily to build lasting habits' },
  { icon: '🎯', tip: 'Focus on weak areas for maximum improvement' },
  { icon: '💡', tip: 'Teaching concepts to yourself boosts retention' },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { user } = useAuth();
  const { isDarkMode, toggleDarkMode, bookmarks } = useApp();

  const headerAnim = useRef(new Animated.Value(0)).current;
  const cardsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(headerAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(cardsAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const firstName = user?.name?.split(' ')[0] || 'Student';

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#1A1040', '#2D1B69', '#4C2FAD']}
          style={[styles.headerGradient, { paddingTop: insets.top + 16 }]}
        >
          <Animated.View style={[styles.headerContent, {
            opacity: headerAnim,
            transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-20, 0] }) }],
          }]}>
            <View style={styles.headerTop}>
              <View>
                <Text style={styles.greetingName}>Hey {firstName}! 👋</Text>
                <Text style={styles.greetingSubtitle}>{GREETING}</Text>
              </View>
              <Pressable onPress={toggleDarkMode} style={styles.darkModeBtn} hitSlop={8}>
                <MaterialIcons
                  name={isDarkMode ? 'light-mode' : 'dark-mode'}
                  size={22}
                  color="#fff"
                />
              </Pressable>
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
              {[
                { label: 'Streak', value: `${user?.streak || 0}🔥`, color: '#FF8E53' },
                { label: 'Points', value: `${user?.totalPoints || 0}⭐`, color: '#FFD700' },
                { label: 'Lessons', value: `${user?.completedLessons || 0}📚`, color: '#4ECDC4' },
                { label: 'Saved', value: `${bookmarks.length}🔖`, color: '#A855F7' },
              ].map((stat) => (
                <View key={stat.label} style={styles.statBox}>
                  <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </Animated.View>
        </LinearGradient>

        <View style={[styles.body, isDarkMode && styles.darkBody]}>
          {/* Modules */}
          <Animated.View style={[{
            opacity: cardsAnim,
            transform: [{ translateY: cardsAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
          }]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
                📚 Learning Modules
              </Text>
              <Text style={[styles.sectionSub, isDarkMode && styles.darkSubText]}>
                4 AI-Powered Subjects
              </Text>
            </View>

            <View style={styles.modulesGrid}>
              {MODULES.map((module) => (
                <ModuleCard
                  key={module.id}
                  title={module.title}
                  subtitle={module.subtitle}
                  icon={module.icon}
                  emoji={module.emoji}
                  colorStart={module.colorStart}
                  colorEnd={module.colorEnd}
                  lessonCount={module.id === 'math' ? 8 : module.id === 'aptitude' ? 7 : module.id === 'webdev' ? 5 : 5}
                  onPress={() => router.push(module.route as any)}
                />
              ))}
            </View>
          </Animated.View>

          {/* Quick Tips */}
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
              💡 Study Tips
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tipsScroll}
          >
            {QUICK_TIPS.map((tip, i) => (
              <View
                key={i}
                style={[styles.tipCard, isDarkMode && styles.darkCard, Shadow.sm]}
              >
                <Text style={styles.tipIcon}>{tip.icon}</Text>
                <Text style={[styles.tipText, isDarkMode && styles.darkText]}>{tip.tip}</Text>
              </View>
            ))}
          </ScrollView>

          {/* AI Chat CTA */}
          <Pressable
            onPress={() => router.push('/(tabs)/chat')}
            style={({ pressed }) => [pressed && { opacity: 0.9 }]}
          >
            <LinearGradient
              colors={['#4C2FAD', '#6C63FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.chatCTA}
            >
              <Text style={styles.chatCTAEmoji}>🤖</Text>
              <View style={styles.chatCTAText}>
                <Text style={styles.chatCTATitle}>Ask AI Anything</Text>
                <Text style={styles.chatCTASubtitle}>Get instant answers to your doubts</Text>
              </View>
              <MaterialIcons name="arrow-forward" size={22} color="#fff" />
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  darkContainer: { backgroundColor: Colors.darkBg },
  headerGradient: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  headerContent: { gap: Spacing.lg },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greetingName: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.extrabold,
    color: '#fff',
  },
  greetingSubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 4,
    maxWidth: 240,
  },
  darkModeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: Radius.xl,
    padding: Spacing.md,
    gap: 4,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
  },
  statLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.65)',
    fontWeight: FontWeight.medium,
  },
  body: {
    backgroundColor: Colors.background,
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: Spacing.lg,
    paddingBottom: 32,
    gap: Spacing.md,
    minHeight: 600,
  },
  darkBody: {
    backgroundColor: Colors.darkBg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.text,
  },
  darkText: { color: Colors.darkText },
  darkSubText: { color: Colors.darkTextSubtle },
  sectionSub: {
    fontSize: FontSize.xs,
    color: Colors.textSubtle,
  },
  modulesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  tipsScroll: {
    gap: Spacing.md,
    paddingBottom: 4,
  },
  tipCard: {
    width: 220,
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.md,
    gap: 10,
  },
  darkCard: { backgroundColor: Colors.darkCard },
  tipIcon: { fontSize: 28 },
  tipText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  chatCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: Radius.xl,
    gap: Spacing.md,
    marginTop: 4,
  },
  chatCTAEmoji: { fontSize: 32 },
  chatCTAText: { flex: 1, gap: 4 },
  chatCTATitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: '#fff',
  },
  chatCTASubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.75)',
  },
});
