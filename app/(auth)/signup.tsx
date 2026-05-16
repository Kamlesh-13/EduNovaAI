import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  Pressable, KeyboardAvoidingView, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { Colors, FontSize, FontWeight, Spacing, Radius } from '@/constants/theme';

export default function SignupScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { signup, isLoading } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!name.trim()) { setError('Please enter your name.'); return; }
    if (!email.trim()) { setError('Please enter your email.'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }

    setError('');
    const result = await signup(name.trim(), email.trim(), password);
    if (result.success) {
      router.replace('/(tabs)');
    } else {
      setError('Signup failed. Please try again.');
    }
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
          <Text style={styles.appName}>Join EduNova AI</Text>
          <Text style={styles.headerSubtitle}>Start your learning journey today</Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Create Account 🚀</Text>
        <Text style={styles.subtitle}>Fill in your details to get started</Text>

        <View style={styles.form}>
          {[
            { label: 'Full Name', value: name, setter: setName, placeholder: 'Enter your full name', icon: 'person', type: 'default' },
            { label: 'Email Address', value: email, setter: setEmail, placeholder: 'Enter your email', icon: 'email', type: 'email-address' },
          ].map((field) => (
            <View key={field.label} style={styles.inputGroup}>
              <Text style={styles.label}>{field.label}</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name={field.icon as any} size={20} color={Colors.textSubtle} />
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={field.value}
                  onChangeText={field.setter}
                  placeholder={field.placeholder}
                  placeholderTextColor={Colors.textSubtle}
                  keyboardType={field.type as any}
                  autoCapitalize={field.type === 'email-address' ? 'none' : 'words'}
                  autoCorrect={false}
                  accessibilityLabel={field.label}
                />
              </View>
            </View>
          ))}

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={20} color={Colors.textSubtle} />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Minimum 6 characters"
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

          {/* Confirm Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock-outline" size={20} color={Colors.textSubtle} />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Re-enter your password"
                placeholderTextColor={Colors.textSubtle}
                secureTextEntry
                accessibilityLabel="Confirm password"
              />
            </View>
          </View>

          {error ? (
            <View style={styles.errorRow}>
              <MaterialIcons name="error-outline" size={14} color={Colors.error} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <Button
            title="Create Account"
            onPress={handleSignup}
            variant="gradient"
            gradientColors={[Colors.primary, '#A855F7']}
            size="lg"
            loading={isLoading}
            fullWidth
          />

          {/* Terms */}
          <Text style={styles.terms}>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Link href="/(auth)/login" asChild>
            <Pressable>
              <Text style={styles.loginLink}>Sign In</Text>
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
  logoEmoji: { fontSize: 48 },
  appName: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.extrabold,
    color: '#fff',
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
    marginBottom: Spacing.sm,
  },
  form: {
    gap: Spacing.md,
  },
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
  terms: {
    fontSize: 12,
    color: Colors.textSubtle,
    textAlign: 'center',
    lineHeight: 18,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  loginText: {
    fontSize: FontSize.md,
    color: Colors.textSubtle,
  },
  loginLink: {
    fontSize: FontSize.md,
    color: Colors.primary,
    fontWeight: FontWeight.semibold,
  },
});
