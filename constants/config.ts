export const APP_NAME = 'EduNova AI';
export const APP_VERSION = '1.0.0';

export const MOCK_USER = {
  id: 'mock-001',
  name: 'Rahul Sharma',
  email: 'test@example.com',
  password: '123456',
  avatar: null,
  joinDate: '2024-01-15',
  streak: 7,
  totalPoints: 1250,
  completedLessons: 24,
  badges: ['First Login', '7-Day Streak', 'Math Master'],
};

export const MODULES = [
  {
    id: 'math',
    title: 'Mathematics',
    subtitle: 'Formulas & Algorithms',
    icon: 'calculate',
    colorStart: '#6C63FF',
    colorEnd: '#A855F7',
    route: '/math',
    emoji: '📐',
  },
  {
    id: 'aptitude',
    title: 'Aptitude',
    subtitle: 'Logical Reasoning & QA',
    icon: 'psychology',
    colorStart: '#FF6B6B',
    colorEnd: '#FF8E53',
    route: '/aptitude',
    emoji: '🧠',
  },
  {
    id: 'webdev',
    title: 'Web Development',
    subtitle: 'Coding Assistant',
    icon: 'code',
    colorStart: '#4ECDC4',
    colorEnd: '#44A08D',
    route: '/webdev',
    emoji: '💻',
  },
  {
    id: 'english',
    title: 'English Coach',
    subtitle: 'Speaking & Grammar',
    icon: 'record-voice-over',
    colorStart: '#45B7D1',
    colorEnd: '#6C63FF',
    route: '/english',
    emoji: '🗣️',
  },
];

export const GREETINGS = [
  'Ready to learn something amazing today?',
  'Your brain is your superpower!',
  'Every expert was once a beginner.',
  'Knowledge is the key to every door.',
  'Let\'s crush your goals today!',
];
