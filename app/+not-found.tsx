import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1A1040', '#2D1B69']}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.content}>
        <MaterialIcons name="school" size={80} color="#6C63FF" />
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.message}>
          This page doesn't exist yet. Head back to continue learning!
        </Text>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.homeButtonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E1A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  homeButton: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
