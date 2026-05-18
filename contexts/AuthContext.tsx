import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MOCK_USER } from '@/constants/config';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  streak: number;
  totalPoints: number;
  completedLessons: number;
  badges: string[];
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkStoredAuth();
  }, []);

  const checkStoredAuth = async () => {
    try {
      const stored = await AsyncStorage.getItem('@edunova_user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      // ignore
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));

    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already signed up and stored in AsyncStorage
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const accountKeys = allKeys.filter(k => k.startsWith('@edunova_account_'));
      for (const key of accountKeys) {
        const stored = await AsyncStorage.getItem(key);
        if (stored) {
          const account = JSON.parse(stored);
          if (account.email === normalizedEmail && account.password === password) {
            const userData: User = {
              id: account.id,
              name: account.name,
              email: account.email,
              avatar: account.avatar || null,
              streak: account.streak || 1,
              totalPoints: account.totalPoints || 0,
              completedLessons: account.completedLessons || 0,
              badges: account.badges || ['New Learner'],
              joinDate: account.joinDate || new Date().toISOString().split('T')[0],
            };
            setUser(userData);
            await AsyncStorage.setItem('@edunova_user', JSON.stringify(userData));
            setIsLoading(false);
            return { success: true };
          }
        }
      }
    } catch (e) {
      // ignore storage errors
    }

    // Also allow the built-in demo account
    if (normalizedEmail === MOCK_USER.email && password === MOCK_USER.password) {
      const userData: User = {
        id: MOCK_USER.id,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
        avatar: MOCK_USER.avatar,
        streak: MOCK_USER.streak,
        totalPoints: MOCK_USER.totalPoints,
        completedLessons: MOCK_USER.completedLessons,
        badges: MOCK_USER.badges,
        joinDate: MOCK_USER.joinDate,
      };
      setUser(userData);
      await AsyncStorage.setItem('@edunova_user', JSON.stringify(userData));
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return { success: false, error: 'No account found with these credentials. Please sign up first.' };
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));

    const normalizedEmail = email.trim().toLowerCase();
    const userId = `user-${Date.now()}`;

    const userData: User = {
      id: userId,
      name: name.trim(),
      email: normalizedEmail,
      avatar: null,
      streak: 0,
      totalPoints: 0,
      completedLessons: 0,
      badges: ['New Learner'],
      joinDate: new Date().toISOString().split('T')[0],
    };

    // Persist account credentials for future logins
    try {
      await AsyncStorage.setItem(
        `@edunova_account_${normalizedEmail}`,
        JSON.stringify({ ...userData, password })
      );
    } catch (e) {
      // ignore
    }

    setUser(userData);
    await AsyncStorage.setItem('@edunova_user', JSON.stringify(userData));
    setIsLoading(false);
    return { success: true };
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('@edunova_user');
  };

  const updateUser = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    AsyncStorage.setItem('@edunova_user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      updateUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
