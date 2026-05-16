// EduNova AI — Design Tokens

export const Colors = {
  // Brand
  primary: '#6C63FF',
  primaryLight: '#A78BFA',
  primaryDark: '#4C46B8',
  secondary: '#FF6B6B',
  accent: '#4ECDC4',
  gold: '#FFD700',

  // Module Gradients
  mathStart: '#6C63FF',
  mathEnd: '#A855F7',
  aptStart: '#FF6B6B',
  aptEnd: '#FF8E53',
  webStart: '#4ECDC4',
  webEnd: '#44A08D',
  engStart: '#45B7D1',
  engEnd: '#6C63FF',

  // Backgrounds
  background: '#F5F4FF',
  surface: '#FFFFFF',
  surfaceSecondary: '#F0EFFE',
  card: '#FFFFFF',

  // Text
  text: '#1A1A2E',
  textSecondary: '#4B5563',
  textSubtle: '#9CA3AF',
  textInverse: '#FFFFFF',

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // UI
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  overlay: 'rgba(0,0,0,0.5)',
  shadow: 'rgba(108,99,255,0.15)',

  // Dark Mode
  darkBg: '#0F0E1A',
  darkSurface: '#1A1830',
  darkCard: '#231F3A',
  darkBorder: '#2D2950',
  darkText: '#F0EFFE',
  darkTextSubtle: '#9CA3AF',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const FontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
};

export const Shadow = {
  sm: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  md: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  lg: {
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};
