import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import { Platform } from "react-native";

// Request permissions and get token
export async function registerForPushNotifications() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (!enabled) {
    throw new Error("Notification permission not granted");
  }

  const token = await messaging().getToken();
  return token;
}

// Listen for foreground messages
export function onMessageListener(callback: (message: any) => void) {
  const unsubscribe = messaging().onMessage(callback);
  return unsubscribe;
}
