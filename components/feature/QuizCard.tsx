import React, { useState, memo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Radius, FontSize, FontWeight, Spacing, Shadow } from '@/constants/theme';
import { MCQuestion } from '@/services/aptitudeData';

interface QuizCardProps {
  question: MCQuestion;
  onAnswer?: (correct: boolean) => void;
}

export const QuizCard = memo(({ question, onAnswer }: QuizCardProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    onAnswer?.(idx === question.correct);
  };

  const difficultyColor = {
    easy: Colors.success,
    medium: Colors.warning,
    hard: Colors.error,
  }[question.difficulty];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.diffBadge, { backgroundColor: difficultyColor + '22' }]}>
          <Text style={[styles.diffText, { color: difficultyColor }]}>
            {question.difficulty.toUpperCase()}
          </Text>
        </View>
      </View>

      <Text style={styles.question}>{question.question}</Text>

      <View style={styles.options}>
        {question.options.map((opt, idx) => {
          let optStyle = styles.option;
          let textStyle = styles.optionText;
          let icon = null;

          if (selected !== null) {
            if (idx === question.correct) {
              optStyle = { ...styles.option, ...styles.optionCorrect };
              textStyle = { ...styles.optionText, ...styles.optionTextCorrect };
              icon = <MaterialIcons name="check-circle" size={18} color={Colors.success} />;
            } else if (idx === selected && selected !== question.correct) {
              optStyle = { ...styles.option, ...styles.optionWrong };
              textStyle = { ...styles.optionText, ...styles.optionTextWrong };
              icon = <MaterialIcons name="cancel" size={18} color={Colors.error} />;
            }
          }

          return (
            <Pressable
              key={idx}
              style={({ pressed }) => [
                optStyle,
                pressed && selected === null && styles.optionPressed,
              ]}
              onPress={() => handleSelect(idx)}
            >
              <View style={styles.optionLetter}>
                <Text style={styles.optionLetterText}>
                  {String.fromCharCode(65 + idx)}
                </Text>
              </View>
              <Text style={[textStyle, { flex: 1 }]}>{opt}</Text>
              {icon}
            </Pressable>
          );
        })}
      </View>

      {showExplanation && (
        <View style={styles.explanation}>
          <MaterialIcons name="lightbulb" size={16} color={Colors.warning} />
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: Spacing.lg,
    ...Shadow.sm,
    gap: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  diffBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  diffText: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5,
  },
  question: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.text,
    lineHeight: 24,
  },
  options: {
    gap: Spacing.sm,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    padding: Spacing.md,
    borderRadius: Radius.md,
    backgroundColor: Colors.background,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  optionPressed: {
    backgroundColor: Colors.surfaceSecondary,
    borderColor: Colors.primary,
  },
  optionCorrect: {
    backgroundColor: '#ECFDF5',
    borderColor: Colors.success,
  },
  optionWrong: {
    backgroundColor: '#FEF2F2',
    borderColor: Colors.error,
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLetterText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  optionText: {
    fontSize: FontSize.md,
    color: Colors.text,
  },
  optionTextCorrect: {
    color: Colors.success,
    fontWeight: FontWeight.medium,
  },
  optionTextWrong: {
    color: Colors.error,
    fontWeight: FontWeight.medium,
  },
  explanation: {
    flexDirection: 'row',
    gap: 8,
    padding: Spacing.md,
    backgroundColor: '#FFFBEB',
    borderRadius: Radius.md,
    alignItems: 'flex-start',
  },
  explanationText: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
});
