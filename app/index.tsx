import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { useAuth } from '@/hooks/useAuth';
import { Colors, FontSize, FontWeight } from '@/constants/theme';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  const logoAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const taglineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(textAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(taglineAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();

    const timer = setTimeout(() => {
      if (!isLoading) {
        if (isAuthenticated) {
          router.replace('/(tabs)');
        } else {
          router.replace('/(auth)/login');
        }
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [isLoading, isAuthenticated]);

  return (
    <LinearGradient
      colors={['#1A1040', '#2D1B69', '#4C2FAD']}
      style={styles.container}
    >
      <StatusBar style="light" />

      <Image
        source={require('@/assets/images/splash-hero.png')}
        style={styles.heroImage}
        contentFit="cover"
      />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Animated.View style={[styles.logoContainer, {
          opacity: logoAnim,
          transform: [{ scale: logoAnim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] }) }],
        }]}>
          <LinearGradient
            colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.1)']}
            style={styles.logoBox}
          >
            <Text style={styles.logoEmoji}>🎓</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.Text style={[styles.appName, { opacity: textAnim, transform: [{ translateY: textAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] }]}>
          EduNova AI
        </Animated.Text>

        <Animated.Text style={[styles.tagline, { opacity: taglineAnim }]}>
          Learn Smarter, Not Harder
        </Animated.Text>

        <Animated.View style={[styles.features, { opacity: taglineAnim }]}>
          {['📐 Math', '🧠 Aptitude', '💻 Web Dev', '🗣️ English'].map((f, i) => (
            <View key={i} style={styles.featurePill}>
              <Text style={styles.featureText}>{f}</Text>
            </View>
          ))}
        </Animated.View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.poweredBy}>Powered by AI · Built for Students</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    position: 'absolute',
    width,
    height,
    opacity: 0.15,
  },
  overlay: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'transparent',
  },
  content: {
    alignItems: 'center',
    gap: 16,
  },
  logoContainer: {
    marginBottom: 8,
  },
  logoBox: {
    width: 96,
    height: 96,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  logoEmoji: {
    fontSize: 52,
  },
  appName: {
    fontSize: 38,
    fontWeight: FontWeight.extrabold,
    color: '#fff',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: FontSize.lg,
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 0.5,
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  featurePill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  featureText: {
    color: '#fff',
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
  },
  bottom: {
    position: 'absolute',
    bottom: 40,
  },
  poweredBy: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: FontSize.sm,
    letterSpacing: 0.5,
  },
});
