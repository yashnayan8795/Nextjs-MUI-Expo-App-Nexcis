import React from 'react';
import { StyleSheet } from 'react-native';
import WebViewComponent from '../../components/WebViewComponent';
import { Stack } from 'expo-router';
import { CONFIG } from '../../constants/Config';

export default function WebViewScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Web App',
          headerShown: true,
        }}
      />
      <WebViewComponent url={CONFIG.NEXT_JS_APP_URL} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 