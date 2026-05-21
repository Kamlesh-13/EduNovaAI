import { useEffect } from 'react';
import { Platform } from 'react-native';

export function useFrameworkReady() {
  useEffect(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const startTime = performance.now();
      return () => {
        const loadTime = performance.now() - startTime;
        console.log(`[EduNova AI] Framework ready in ${Math.round(loadTime)}ms`);
      };
    }
  }, []);
}
