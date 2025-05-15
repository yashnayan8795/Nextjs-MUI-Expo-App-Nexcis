# Next.js MUI Mobile App

This project consists of two main parts:
1. A Next.js web application with Material-UI and Google Sign-In
2. An Expo Android app that integrates the Next.js app using WebView

## Project Structure

```
├── nextjs-mui-auth-app/     # Next.js web application
└── necxis-webview-app/      # Expo Android app
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Android Studio (for Android development)
- Firebase account
- Google Cloud Console account

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nextjs-mui-mobile-app
```

### 2. Next.js App Setup

```bash
cd nextjs-mui-auth-app
npm install
```

Create a `.env.local` file with your Firebase configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Start the Next.js app:
```bash
npm run dev
```

### 3. Expo App Setup

```bash
cd necxis-webview-app
npm install
```

Create a `.env` file with your configuration:
```
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

Start the Expo app:
```bash
npx expo start
```

## Firebase Setup

1. Create a new Firebase project
2. Enable Google Sign-In in Authentication
3. Add your Android app in Firebase Console
4. Download `google-services.json` and place it in `necxis-webview-app/android/app/`
5. Enable Firebase Cloud Messaging

## Development

- Next.js app runs on `http://localhost:3000`
- For Android emulator, use `http://10.0.2.2:3000` in WebView
- For physical device, use your computer's local IP address

## Building for Production

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
