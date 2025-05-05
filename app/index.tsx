import * as Application from 'expo-application';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const isAppClip = Application.applicationId?.endsWith('.clip') ?? false;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Clip Demo</Text>
      <Text style={styles.info}>Bundle ID: {Application.applicationId}</Text>
      <Text style={styles.infoValue}>
        {isAppClip ? 'Running as App Clip ✓' : 'Not running as App Clip ✗'}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoValue: {
    fontSize: 14,
  },
  info: {
    fontSize: 14,
    color: '#666',
  },
});
