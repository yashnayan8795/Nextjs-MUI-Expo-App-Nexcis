import { GOOGLE_EXPO_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';
import * as Google from 'expo-auth-session/providers/google';

export function useGoogleAuth() {
const [request, response, promptAsync] = Google.useAuthRequest({
expoClientId: GOOGLE_EXPO_CLIENT_ID,
androidClientId: GOOGLE_ANDROID_CLIENT_ID,
iosClientId: GOOGLE_IOS_CLIENT_ID,
});

return { request, response, promptAsync };
}