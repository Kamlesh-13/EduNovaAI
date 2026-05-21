import { useEffect } from 'react';
import { AlertProvider } from '@/template';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export const unstable_settings = {
  title: 'EduNova AI - Learn Smarter, Not Harder',
};

export default function RootLayout() {
  useFrameworkReady();

  return (
    <AlertProvider>
      <SafeAreaProvider>
        <AuthProvider>
          <AppProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(auth)/login" />
              <Stack.Screen name="(auth)/signup" />
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="math/index" />
              <Stack.Screen name="aptitude/index" />
              <Stack.Screen name="aptitude/[topic]" />
              <Stack.Screen name="webdev/index" />
              <Stack.Screen name="webdev/[tech]" />
              <Stack.Screen name="english/index" />
              <Stack.Screen name="english/[topic]" />
            </Stack>
            <StatusBar style="auto" />
          </AppProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </AlertProvider>
  );
}
