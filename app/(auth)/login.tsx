import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  Pressable, KeyboardAvoidingView, Platform, Animated, ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { Colors, FontSize, FontWeight, Spacing, Radius } from '@/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { login, signup, isLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      triggerShake();
      setError('Please enter email and password.');
      return;
    }
    setError('');
    const result = await login(email.trim(), password);
    if (result.success) {
      router.replace('/(tabs)');
    } else {
      setError(result.error || 'Login failed.');
      triggerShake();
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setGoogleLoading(true);
    // Simulate Google OAuth flow — creates/logs into a demo Google account
    await new Promise(r => setTimeout(r, 1400));
    const result = await signup('Google User', 'googleuser@gmail.com', 'google_oauth_mock');
    setGoogleLoading(false);
    if (result.success) {
      router.replace('/(tabs)');
    } else {
      // Already exists — just log in
      const loginResult = await login('google@example.com', 'google123');
      if (loginResult.success) {
        router.replace('/(tabs)');
      } else {
        setError('Google sign-in failed. Please try email login.');
      }
    }
  };

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 80, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 80, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 80, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 80, useNativeDriver: true }),
    ]).start();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="light" />
      <LinearGradient
        colors={['#1A1040', '#2D1B69', '#4C2FAD']}
        style={[styles.gradient, { paddingTop: insets.top }]}
      >
        <View style={styles.header}>
          <Text style={styles.logoEmoji}>🎓</Text>
          <Text style={styles.appName}>EduNova AI</Text>
          <Text style={styles.headerSubtitle}>Your AI-Powered Study Partner</Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Welcome Back! 👋</Text>
        <Text style={styles.subtitle}>Sign in to continue learning</Text>

        <Animated.View style={[styles.form, { transform: [{ translateX: shakeAnim }] }]}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={20} color={Colors.textSubtle} />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor={Colors.textSubtle}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Email address"
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={20} color={Colors.textSubtle} />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor={Colors.textSubtle}
                secureTextEntry={!showPassword}
                accessibilityLabel="Password"
              />
              <Pressable onPress={() => setShowPassword(p => !p)} hitSlop={8}>
                <MaterialIcons
                  name={showPassword ? 'visibility-off' : 'visibility'}
                  size={20}
                  color={Colors.textSubtle}
                />
              </Pressable>
            </View>
          </View>

          {error ? (
            <View style={styles.errorRow}>
              <MaterialIcons name="error-outline" size={14} color={Colors.error} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <Button
            title="Sign In"
            onPress={handleLogin}
            variant="gradient"
            gradientColors={[Colors.primary, '#A855F7']}
            size="lg"
            loading={isLoading}
            fullWidth
            style={{ marginTop: Spacing.sm }}
          />

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google Button */}
          <Pressable
            style={({ pressed }) => [
              styles.googleBtn,
              pressed && { opacity: 0.85 },
              googleLoading && { opacity: 0.7 },
            ]}
            onPress={handleGoogleLogin}
            disabled={googleLoading || isLoading}
          >
            {googleLoading ? (
              <ActivityIndicator size="small" color="#4285F4" />
            ) : (
              <View style={styles.googleIconCircle}>
                <Text style={styles.googleIconText}>G</Text>
              </View>
            )}
            <Text style={styles.googleText}>
              {googleLoading ? 'Signing in with Google...' : 'Continue with Google'}
            </Text>
          </Pressable>
        </Animated.View>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>{"Don't have an account? "}</Text>
          <Link href="/(auth)/signup" asChild>
            <Pressable>
              <Text style={styles.signupLink}>Sign Up</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    paddingBottom: Spacing.xxl,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.sm,
    gap: 4,
  },
  logoEmoji: { fontSize: 52 },
  appName: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.extrabold,
    color: '#fff',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.7)',
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.surface,
    marginTop: -24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  scrollContent: {
    padding: Spacing.lg,
    paddingBottom: 48,
    gap: 8,
  },
  title: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.text,
    marginTop: 8,
  },
  subtitle: {
    fontSize: FontSize.md,
    color: Colors.textSubtle,
    marginBottom: Spacing.md,
  },
  form: { gap: Spacing.md },
  inputGroup: { gap: 6 },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.textSecondary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.background,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  input: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.text,
    includeFontPadding: false,
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  errorText: {
    fontSize: FontSize.sm,
    color: Colors.error,
    flex: 1,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginVertical: 4,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: Colors.border },
  dividerText: { fontSize: FontSize.sm, color: Colors.textSubtle },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 14,
    borderRadius: Radius.md,
    borderWidth: 1.5,
    borderColor: '#DADCE0',
    backgroundColor: Colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  googleIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIconText: {
    fontSize: 14,
    fontWeight: FontWeight.bold,
    color: '#fff',
  },
  googleText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.text,
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  signupText: { fontSize: FontSize.md, color: Colors.textSubtle },
  signupLink: {
    fontSize: FontSize.md,
    color: Colors.primary,
    fontWeight: FontWeight.semibold,
  },
});
