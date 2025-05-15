// app/webview.tsx

import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebviewScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'http://192.168.xx.xx:3000' }} // ⬅ Replace with your IP:PORT
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color="blue"
            size="large"
            style={{ flex: 1, justifyContent: 'center' }}
          />
        )}
      />
    </View>
  );
}
