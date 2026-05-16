import React, { useState, useRef, useCallback } from 'react';
import {
  View, Text, TextInput, StyleSheet, FlatList,
  Pressable, KeyboardAvoidingView, Platform, ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ChatBubble } from '@/components/feature/ChatBubble';
import { useApp, ChatMessage } from '@/contexts/AppContext';
import { getAIResponse, AIChatModule } from '@/services/aiService';
import { Colors, FontSize, FontWeight, Spacing, Radius } from '@/constants/theme';

const MODULES: { id: AIChatModule; label: string; emoji: string }[] = [
  { id: 'general', label: 'General', emoji: '🎓' },
  { id: 'math', label: 'Math', emoji: '📐' },
  { id: 'aptitude', label: 'Aptitude', emoji: '🧠' },
  { id: 'webdev', label: 'Web Dev', emoji: '💻' },
  { id: 'english', label: 'English', emoji: '🗣️' },
];

const WELCOME_MSG: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: "Hi! I'm your EduNova AI Study Assistant 🤖\n\nI can help you with:\n• 📐 Math formulas and problems\n• 🧠 Aptitude and reasoning tricks\n• 💻 Coding doubts and web dev\n• 🗣️ English grammar and speaking\n\nSelect a subject above and ask me anything!",
  timestamp: new Date(),
};

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const { chatHistory, addChatMessage, clearChatHistory } = useApp();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeModule, setActiveModule] = useState<AIChatModule>('general');
  const flatListRef = useRef<FlatList>(null);

  const messages = chatHistory.length > 0 ? chatHistory : [WELCOME_MSG];

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setInput('');
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date(),
      module: activeModule,
    };
    addChatMessage(userMsg);
    setIsTyping(true);

    try {
      const response = await getAIResponse(text, activeModule);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
        module: activeModule,
      };
      addChatMessage(aiMsg);
    } catch {
      addChatMessage({
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'I encountered an issue. Please try again.',
        timestamp: new Date(),
      });
    } finally {
      setIsTyping(false);
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [input, isTyping, activeModule, addChatMessage]);

  const SUGGESTIONS = [
    'Explain quadratic formula', 'Percentage shortcuts', 'What is flexbox?', 'Correct my sentence',
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      {/* Header */}
      <LinearGradient
        colors={['#1A1040', '#2D1B69']}
        style={styles.header}
      >
        <View style={styles.headerRow}>
          <View style={styles.aiAvatar}>
            <Text style={styles.aiAvatarEmoji}>🤖</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>EduNova AI</Text>
            <Text style={styles.headerSub}>
              {isTyping ? 'Typing...' : 'AI Study Assistant • Online'}
            </Text>
          </View>
          <Pressable
            onPress={clearChatHistory}
            style={styles.clearBtn}
            hitSlop={8}
          >
            <MaterialIcons name="delete-outline" size={22} color="rgba(255,255,255,0.7)" />
          </Pressable>
        </View>

        {/* Module Selector */}
        <FlatList
          horizontal
          data={MODULES}
          keyExtractor={i => i.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moduleScroll}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setActiveModule(item.id)}
              style={[
                styles.moduleChip,
                activeModule === item.id && styles.moduleChipActive,
              ]}
            >
              <Text style={styles.moduleEmoji}>{item.emoji}</Text>
              <Text style={[
                styles.moduleLabel,
                activeModule === item.id && styles.moduleLabelActive,
              ]}>
                {item.label}
              </Text>
            </Pressable>
          )}
        />
      </LinearGradient>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={m => m.id}
          contentContainerStyle={styles.messagesList}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
          renderItem={({ item }) => (
            <ChatBubble
              message={item.content}
              role={item.role}
              timestamp={item.timestamp}
            />
          )}
          ListFooterComponent={isTyping ? (
            <View style={styles.typingIndicator}>
              <View style={styles.aiAvatarSmall}>
                <Text style={{ fontSize: 14 }}>🤖</Text>
              </View>
              <View style={styles.typingBubble}>
                <ActivityIndicator size="small" color={Colors.primary} />
                <Text style={styles.typingText}>EduNova AI is thinking...</Text>
              </View>
            </View>
          ) : null}
        />

        {/* Quick Suggestions */}
        {messages.length <= 1 && (
          <FlatList
            horizontal
            data={SUGGESTIONS}
            keyExtractor={s => s}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.suggestionsScroll}
            renderItem={({ item }) => (
              <Pressable
                style={styles.suggestionChip}
                onPress={() => setInput(item)}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </Pressable>
            )}
          />
        )}

        {/* Input */}
        <View style={[styles.inputArea, { paddingBottom: insets.bottom + 12 }]}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask anything..."
            placeholderTextColor={Colors.textSubtle}
            multiline
            maxLength={500}
            returnKeyType="send"
            onSubmitEditing={handleSend}
            accessibilityLabel="Chat input"
          />
          <Pressable
            onPress={handleSend}
            disabled={!input.trim() || isTyping}
            style={({ pressed }) => [
              styles.sendBtn,
              (!input.trim() || isTyping) && styles.sendBtnDisabled,
              pressed && { opacity: 0.85 },
            ]}
          >
            <MaterialIcons
              name="send"
              size={20}
              color={input.trim() && !isTyping ? '#fff' : Colors.textSubtle}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  flex: { flex: 1 },
  header: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.sm,
  },
  aiAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiAvatarEmoji: { fontSize: 24 },
  headerTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: '#fff',
  },
  headerSub: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.65)',
  },
  clearBtn: {
    marginLeft: 'auto',
    padding: 4,
  },
  moduleScroll: {
    gap: 8,
    paddingVertical: 4,
  },
  moduleChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.full,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  moduleChipActive: {
    backgroundColor: Colors.primary,
  },
  moduleEmoji: { fontSize: 14 },
  moduleLabel: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: FontWeight.medium,
  },
  moduleLabelActive: {
    color: '#fff',
    fontWeight: FontWeight.semibold,
  },
  messagesList: {
    paddingVertical: Spacing.md,
    paddingHorizontal: 4,
    gap: 8,
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: Spacing.md,
    marginTop: 8,
  },
  aiAvatarSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  typingText: {
    fontSize: FontSize.sm,
    color: Colors.textSubtle,
  },
  suggestionsScroll: {
    gap: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
  },
  suggestionChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  suggestionText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: FontWeight.medium,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    paddingHorizontal: Spacing.md,
    paddingTop: 8,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    backgroundColor: Colors.background,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    fontSize: FontSize.md,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
    includeFontPadding: false,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: Colors.borderLight,
  },
});
