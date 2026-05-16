import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, FontSize, Spacing } from '@/constants/theme';

interface ChatBubbleProps {
  message: string;
  role: 'user' | 'assistant';
  timestamp?: Date;
}

export const ChatBubble = memo(({ message, role, timestamp }: ChatBubbleProps) => {
  const isUser = role === 'user';

  return (
    <View style={[styles.container, isUser ? styles.containerUser : styles.containerAI]}>
      {!isUser && (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🤖</Text>
        </View>
      )}
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}>
        <Text style={[styles.text, isUser ? styles.userText : styles.aiText]}>
          {message}
        </Text>
        {timestamp && (
          <Text style={[styles.time, isUser ? styles.userTime : styles.aiTime]}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: Spacing.md,
    maxWidth: '85%',
  },
  containerUser: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  containerAI: {
    alignSelf: 'flex-start',
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  avatarText: {
    fontSize: 18,
  },
  bubble: {
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    maxWidth: '100%',
  },
  userBubble: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: Colors.surface,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  text: {
    fontSize: FontSize.md,
    lineHeight: 22,
  },
  userText: {
    color: Colors.textInverse,
  },
  aiText: {
    color: Colors.text,
  },
  time: {
    fontSize: 10,
    marginTop: 4,
  },
  userTime: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'right',
  },
  aiTime: {
    color: Colors.textSubtle,
  },
});
