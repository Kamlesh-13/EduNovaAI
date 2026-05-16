import React, { useState, memo } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Radius, FontSize, FontWeight, Spacing, Shadow } from '@/constants/theme';
import { Formula } from '@/services/mathData';
import { useApp } from '@/hooks/useApp';

interface FormulaCardProps {
  formula: Formula;
  compact?: boolean;
  onPress?: () => void;
}

export const FormulaCard = memo(({ formula, compact = false, onPress }: FormulaCardProps) => {
  const { isBookmarked, addBookmark, removeBookmark } = useApp();
  const bookmarked = isBookmarked(formula.id);
  const [expanded, setExpanded] = useState(false);

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(formula.id);
    } else {
      addBookmark({
        id: formula.id,
        type: 'formula',
        title: formula.name,
        module: 'math',
        data: formula as unknown as Record<string, unknown>,
      });
    }
  };

  return (
    <Pressable
      onPress={onPress || (() => setExpanded(p => !p))}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.95 }]}
    >
      {/* Expression Box */}
      <LinearGradient
        colors={['#6C63FF', '#A855F7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.expressionBox}
      >
        <Text style={styles.expression}>{formula.expression}</Text>
      </LinearGradient>

      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={2}>{formula.name}</Text>
          <Pressable onPress={toggleBookmark} hitSlop={8}>
            <MaterialIcons
              name={bookmarked ? 'bookmark' : 'bookmark-border'}
              size={22}
              color={bookmarked ? Colors.primary : Colors.textSubtle}
            />
          </Pressable>
        </View>

        {!compact && (
          <Text style={styles.explanation} numberOfLines={expanded ? undefined : 2}>
            {formula.explanation}
          </Text>
        )}

        {expanded && !compact && (
          <View style={styles.details}>
            {/* Variables */}
            {formula.variables.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Variables</Text>
                {formula.variables.map((v, i) => (
                  <View key={i} style={styles.varRow}>
                    <Text style={styles.varSymbol}>{v.symbol}</Text>
                    <Text style={styles.varMeaning}>{v.meaning}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Example */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Example</Text>
              <View style={styles.exampleBox}>
                <Text style={styles.exampleText}>{formula.example}</Text>
              </View>
            </View>
          </View>
        )}

        <Pressable
          style={styles.expandBtn}
          onPress={() => setExpanded(p => !p)}
          hitSlop={8}
        >
          <Text style={styles.expandText}>{expanded ? 'Show less' : 'Show more'}</Text>
          <MaterialIcons
            name={expanded ? 'expand-less' : 'expand-more'}
            size={16}
            color={Colors.primary}
          />
        </Pressable>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.sm,
    marginBottom: Spacing.md,
  },
  expressionBox: {
    padding: Spacing.md,
    alignItems: 'center',
  },
  expression: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: '#fff',
    letterSpacing: 1,
    textAlign: 'center',
  },
  body: {
    padding: Spacing.md,
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.text,
    flex: 1,
    marginRight: 8,
  },
  explanation: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  details: {
    gap: Spacing.md,
    marginTop: 4,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  varRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  varSymbol: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
    width: 40,
  },
  varMeaning: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    flex: 1,
    lineHeight: 20,
  },
  exampleBox: {
    backgroundColor: Colors.background,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
  },
  exampleText: {
    fontSize: FontSize.sm,
    color: Colors.text,
    lineHeight: 20,
    fontFamily: 'monospace',
  },
  expandBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'center',
    marginTop: 4,
  },
  expandText: {
    fontSize: FontSize.sm,
    color: Colors.primary,
    fontWeight: FontWeight.medium,
  },
});
