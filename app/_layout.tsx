import { AlertProvider } from '@/template';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';

export default function RootLayout() {
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
              <Stack.Screen name="math/[category]" />
              <Stack.Screen name="aptitude/index" />
              <Stack.Screen name="aptitude/[topic]" />
              <Stack.Screen name="webdev/index" />
              <Stack.Screen name="webdev/[tech]" />
              <Stack.Screen name="english/index" />
              <Stack.Screen name="english/[topic]" />
            </Stack>
          </AppProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </AlertProvider>
  );
}
