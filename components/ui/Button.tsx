import React, { memo } from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Radius, Spacing, FontSize, FontWeight } from '@/constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  gradientColors?: string[];
  fullWidth?: boolean;
}

export const Button = memo(({
  title, onPress, variant = 'primary', size = 'md',
  loading, disabled, style, textStyle, gradientColors, fullWidth = false,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const sizeStyles = {
    sm: { paddingVertical: Spacing.xs, paddingHorizontal: Spacing.md, minHeight: 36 },
    md: { paddingVertical: 12, paddingHorizontal: Spacing.lg, minHeight: 48 },
    lg: { paddingVertical: Spacing.md, paddingHorizontal: Spacing.xl, minHeight: 56 },
  };

  const textSizes = {
    sm: FontSize.sm,
    md: FontSize.md,
    lg: FontSize.lg,
  };

  if (variant === 'gradient') {
    return (
      <Pressable
        onPress={onPress}
        disabled={isDisabled}
        style={({ pressed }) => [
          { opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] },
          fullWidth && { alignSelf: 'stretch' },
          style,
        ]}
      >
        <LinearGradient
          colors={gradientColors as [string, string] || [Colors.primary, Colors.primaryDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.btn, sizeStyles[size], { opacity: isDisabled ? 0.5 : 1 }]}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={[styles.textPrimary, { fontSize: textSizes[size] }, textStyle]}>{title}</Text>
          )}
        </LinearGradient>
      </Pressable>
    );
  }

  const variantStyles: Record<string, ViewStyle> = {
    primary: { backgroundColor: Colors.primary },
    secondary: { backgroundColor: Colors.surfaceSecondary },
    outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: Colors.primary },
    ghost: { backgroundColor: 'transparent' },
  };

  const variantTextStyles: Record<string, TextStyle> = {
    primary: { color: Colors.textInverse },
    secondary: { color: Colors.primary },
    outline: { color: Colors.primary },
    ghost: { color: Colors.primary },
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.btn,
        sizeStyles[size],
        variantStyles[variant],
        { opacity: isDisabled ? 0.5 : pressed ? 0.85 : 1 },
        pressed && { transform: [{ scale: 0.98 }] },
        fullWidth && { alignSelf: 'stretch' },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#fff' : Colors.primary} size="small" />
      ) : (
        <Text style={[styles.text, { fontSize: textSizes[size] }, variantTextStyles[variant], textStyle]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  btn: {
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontWeight: FontWeight.semibold,
    textAlign: 'center',
  },
  textPrimary: {
    color: Colors.textInverse,
    fontWeight: FontWeight.semibold,
    textAlign: 'center',
  },
});
