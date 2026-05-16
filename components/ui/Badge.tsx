import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSize, Radius } from '@/constants/theme';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

export const Badge = memo(({ label, variant = 'primary', size = 'sm' }: BadgeProps) => {
  const colors = {
    primary: { bg: '#EEF2FF', text: Colors.primary },
    success: { bg: '#ECFDF5', text: Colors.success },
    warning: { bg: '#FFFBEB', text: Colors.warning },
    error: { bg: '#FEF2F2', text: Colors.error },
    info: { bg: '#EFF6FF', text: Colors.info },
  };

  const c = colors[variant];

  return (
    <View style={[styles.badge, { backgroundColor: c.bg }, size === 'md' && styles.badgeMd]}>
      <Text style={[styles.text, { color: c.text }, size === 'md' && styles.textMd]}>{label}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radius.full,
    alignSelf: 'flex-start',
  },
  badgeMd: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  text: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  textMd: {
    fontSize: FontSize.sm,
  },
});
