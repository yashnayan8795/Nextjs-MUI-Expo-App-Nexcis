# Next.js MUI Mobile App with Expo Integration

This project demonstrates the integration of a Next.js web application with Material-UI and an Expo Android app using WebView. It includes Google Sign-In functionality and Firebase Cloud Messaging (FCM) for push notifications.

## 🚀 Features

- **Next.js Web Application**
  - Material-UI (MUI) integration
  - Google Sign-In using Firebase Authentication
  - Responsive design
  - Modern UI/UX

- **Expo Android App**
  - WebView integration with Next.js app
  - Native Firebase Cloud Messaging (FCM)
  - Push notification support
  - Smooth navigation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Android Studio (for Android development)
- Firebase account
- Google Cloud Console account
- Git

## 🛠️ Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/nextjs-mui-mobile-app.git
cd nextjs-mui-mobile-app
```

### 2. Next.js App Setup
```bash
cd nextjs-mui-auth-app
npm install
```

Create a `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Expo App Setup
```bash
cd necxis-webview-app
npm install
```

Create a `.env` file:
```env
GOOGLE_EXPO_CLIENT_ID=your_expo_client_id
GOOGLE_ANDROID_CLIENT_ID=your_android_client_id
GOOGLE_IOS_CLIENT_ID=your_ios_client_id
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

## 🚀 Running the Project

### Running the Next.js App
```bash
cd nextjs-mui-auth-app
npm run dev
```
The Next.js app will be available at `http://localhost:3000`

### Running the Expo App
```bash
cd necxis-webview-app
npx expo start
```
Then:
- Press 'a' to run on Android emulator
- Or scan the QR code with Expo Go app on your physical device

## 🔧 Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Sign-In in Authentication
3. Add your Android app in Firebase Console
4. Download `google-services.json` and place it in `necxis-webview-app/android/app/`
5. Enable Firebase Cloud Messaging

## 📱 Testing the App

### Web App Testing
1. Open `http://localhost:3000` in your browser
2. Test Google Sign-In functionality
3. Verify responsive design on different screen sizes

### Android App Testing
1. Launch the app on Android emulator or physical device
2. Test WebView integration
3. Verify Google Sign-In
4. Test push notifications using Firebase Console

## 🔄 Development Workflow

1. Start the Next.js app for web development
2. Start the Expo app for mobile development
3. Make changes in respective directories
4. Test changes on both platforms

## 📦 Building for Production

### Next.js App
```bash
cd nextjs-mui-auth-app
npm run build
```

### Expo App
```bash
cd necxis-webview-app
eas build --platform android
```

## 🐛 Troubleshooting

### Common Issues

1. **WebView Connection Issues**
   - For Android emulator: Use `http://10.0.2.2:3000`
   - For physical device: Use your computer's local IP address

2. **Firebase Configuration**
   - Ensure all Firebase configuration values are correct
   - Verify Google Sign-In is enabled in Firebase Console
   - Check SHA-1 fingerprint is added to Firebase project

3. **FCM Notifications**
   - Verify FCM token is being generated
   - Check notification permissions are granted
   - Test notifications using Firebase Console

## 📝 Notes

- The project uses native FCM integration instead of Expo's notification service
- Environment variables are properly configured for both apps
- The WebView integration allows seamless communication between web and native components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any questions or issues, please contact:
- Email: nayanyash11@gmail.com