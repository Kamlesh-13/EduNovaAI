import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { useAuth } from '@/hooks/useAuth';
import { useApp } from '@/hooks/useApp';
import { useAlert } from '@/template';
import { Colors, FontSize, FontWeight, Spacing, Radius, Shadow } from '@/constants/theme';

const MENU_ITEMS = [
  { icon: 'bookmark', label: 'Saved Formulas & Notes', color: Colors.primary, screen: null },
  { icon: 'trending-up', label: 'Learning Progress', color: '#4ECDC4', screen: '/(tabs)/progress' },
  { icon: 'notifications', label: 'Study Reminders', color: Colors.warning, screen: null },
  { icon: 'dark-mode', label: 'Dark/Light Mode', color: '#6366F1', screen: null, action: 'darkMode' },
  { icon: 'help', label: 'Help & Support', color: '#FF6B6B', screen: null },
  { icon: 'info', label: 'About EduNova AI', color: Colors.textSubtle, screen: null },
];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode, bookmarks } = useApp();
  const { showAlert } = useAlert();

  const handleLogout = () => {
    showAlert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: async () => { await logout(); router.replace('/(auth)/login'); } },
    ]);
  };

  const handleMenuItem = (item: typeof MENU_ITEMS[0]) => {
    if (item.action === 'darkMode') {
      toggleDarkMode();
      return;
    }
    if (item.screen) {
      router.push(item.screen as any);
      return;
    }
    showAlert(item.label, 'This feature is coming soon in the next update!');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }, isDarkMode && styles.darkContainer]}>
      <StatusBar style="light" />

      <LinearGradient
        colors={['#1A1040', '#2D1B69', '#4C2FAD']}
        style={styles.headerGradient}
      >
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('@/assets/images/default-avatar.png')}
            style={styles.avatar}
            contentFit="cover"
          />
          <View style={styles.editBadge}>
            <MaterialIcons name="edit" size={12} color="#fff" />
          </View>
        </View>

        <Text style={styles.name}>{user?.name || 'Student'}</Text>
        <Text style={styles.email}>{user?.email || ''}</Text>

        <View style={styles.joinBadge}>
          <MaterialIcons name="verified" size={14} color={Colors.gold} />
          <Text style={styles.joinText}>EduNova AI Student</Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={[styles.scrollView, isDarkMode && { backgroundColor: Colors.darkBg }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Quick Stats */}
        <View style={[styles.statsCard, isDarkMode && styles.darkCard]}>
          {[
            { icon: '🔥', value: `${user?.streak || 7}`, label: 'Day Streak' },
            { icon: '⭐', value: `${user?.totalPoints || 1250}`, label: 'Points' },
            { icon: '🔖', value: `${bookmarks.length}`, label: 'Bookmarks' },
            { icon: '🏆', value: `${user?.badges?.length || 3}`, label: 'Badges' },
          ].map((stat, i) => (
            <View key={i} style={styles.statItem}>
              <Text style={styles.statEmoji}>{stat.icon}</Text>
              <Text style={[styles.statValue, isDarkMode && styles.darkText]}>{stat.value}</Text>
              <Text style={[styles.statLabel, isDarkMode && styles.darkSubText]}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu */}
        <View style={[styles.menuCard, isDarkMode && styles.darkCard]}>
          {MENU_ITEMS.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => handleMenuItem(item)}
              style={({ pressed }) => [
                styles.menuItem,
                i < MENU_ITEMS.length - 1 && styles.menuItemBorder,
                isDarkMode && styles.darkMenuItemBorder,
                pressed && (isDarkMode ? styles.darkPressed : styles.pressed),
              ]}
            >
              <View style={[styles.menuIconBg, { backgroundColor: item.color + '18' }]}>
                <MaterialIcons name={item.icon as any} size={20} color={item.color} />
              </View>
              <Text style={[styles.menuLabel, isDarkMode && styles.darkText]}>{item.label}</Text>
              {item.action === 'darkMode' ? (
                <View style={[styles.toggle, isDarkMode && styles.toggleActive]}>
                  <View style={[styles.toggleThumb, isDarkMode && styles.toggleThumbActive]} />
                </View>
              ) : (
                <MaterialIcons name="chevron-right" size={20} color={Colors.textSubtle} />
              )}
            </Pressable>
          ))}
        </View>

        {/* Logout */}
        <Pressable
          onPress={handleLogout}
          style={({ pressed }) => [styles.logoutBtn, pressed && { opacity: 0.85 }]}
        >
          <MaterialIcons name="logout" size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>

        <Text style={styles.version}>EduNova AI v1.0.0 • Built for Students</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  darkContainer: { backgroundColor: Colors.darkBg },
  headerGradient: {
    paddingBottom: Spacing.xxl,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    gap: 8,
  },
  avatarContainer: {
    marginTop: Spacing.md,
    position: 'relative',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: '#fff',
  },
  email: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.7)',
  },
  joinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: Radius.full,
  },
  joinText: {
    fontSize: FontSize.xs,
    color: '#fff',
    fontWeight: FontWeight.medium,
  },
  scrollView: { flex: 1, marginTop: -24, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  scrollContent: { padding: Spacing.md, gap: Spacing.md, paddingBottom: 32 },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.md,
    ...Shadow.sm,
  },
  darkCard: { backgroundColor: Colors.darkCard },
  statItem: { flex: 1, alignItems: 'center', gap: 4 },
  statEmoji: { fontSize: 22 },
  statValue: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.text },
  statLabel: { fontSize: 11, color: Colors.textSubtle, fontWeight: FontWeight.medium },
  darkText: { color: Colors.darkText },
  darkSubText: { color: Colors.darkTextSubtle },
  menuCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 14,
  },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: Colors.borderLight },
  darkMenuItemBorder: { borderBottomColor: Colors.darkBorder },
  pressed: { backgroundColor: Colors.background },
  darkPressed: { backgroundColor: Colors.darkSurface },
  menuIconBg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: { flex: 1, fontSize: FontSize.md, fontWeight: FontWeight.medium, color: Colors.text },
  toggle: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.borderLight,
    padding: 2,
    justifyContent: 'center',
  },
  toggleActive: { backgroundColor: Colors.primary },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  toggleThumbActive: { alignSelf: 'flex-end' },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    borderRadius: Radius.xl,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  logoutText: {
    fontSize: FontSize.md,
    color: Colors.error,
    fontWeight: FontWeight.semibold,
  },
  version: {
    fontSize: 12,
    color: Colors.textSubtle,
    textAlign: 'center',
  },
});
