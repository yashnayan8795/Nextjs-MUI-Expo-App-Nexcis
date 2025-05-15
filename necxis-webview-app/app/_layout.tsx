import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from 'react';
import { Alert } from 'react-native';

import { registerForPushNotifications, onMessageListener } from '../services/notifications';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    // Register for push notifications
    registerForPushNotifications()
      .then(token => {
        console.log('FCM Token:', token);
        // Optionally send this token to your backend
      })
      .catch(err => {
        console.error('Failed to register for push notifications:', err);
      });

    // Listen for foreground messages
    const unsubscribe = onMessageListener(remoteMessage => {
      Alert.alert(
        remoteMessage?.notification?.title || 'Notification',
        remoteMessage?.notification?.body || 'You have a new message!'
      );
    });

    return unsubscribe;
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
