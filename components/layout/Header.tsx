import React, { memo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontSize, FontWeight, Spacing } from '@/constants/theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  rightIcon?: string;
  onRightPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const Header = memo(({
  title, subtitle, showBack = true, rightIcon, onRightPress,
  backgroundColor = Colors.surface, textColor = Colors.text,
}: HeaderProps) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor, paddingTop: insets.top + 8 }]}>
      <View style={styles.row}>
        {showBack && (
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [styles.backBtn, pressed && { opacity: 0.7 }]}
            hitSlop={8}
          >
            <MaterialIcons name="arrow-back-ios" size={20} color={textColor} />
          </Pressable>
        )}

        <View style={styles.titleArea}>
          <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>{title}</Text>
          {subtitle && (
            <Text style={[styles.subtitle, { color: textColor + 'AA' }]} numberOfLines={1}>
              {subtitle}
            </Text>
          )}
        </View>

        {rightIcon ? (
          <Pressable
            onPress={onRightPress}
            style={({ pressed }) => [styles.rightBtn, pressed && { opacity: 0.7 }]}
            hitSlop={8}
          >
            <MaterialIcons name={rightIcon as any} size={24} color={textColor} />
          </Pressable>
        ) : (
          <View style={styles.rightBtn} />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleArea: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
  },
  subtitle: {
    fontSize: FontSize.sm,
  },
  rightBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
