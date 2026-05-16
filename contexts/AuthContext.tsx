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
    await new Promise(r => setTimeout(r, 1200));

    if (email.trim().toLowerCase() === MOCK_USER.email && password === MOCK_USER.password) {
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
    return { success: false, error: 'Invalid email or password. Try test@example.com / 123456' };
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));

    const userData: User = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      avatar: null,
      streak: 0,
      totalPoints: 0,
      completedLessons: 0,
      badges: ['New Learner'],
      joinDate: new Date().toISOString().split('T')[0],
    };
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
