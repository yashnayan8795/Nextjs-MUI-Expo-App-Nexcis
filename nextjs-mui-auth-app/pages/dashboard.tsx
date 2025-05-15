// pages/dashboard.tsx
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useRouter } from 'next/router';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Container,
  CircularProgress,
} from '@mui/material';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.push('/');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card elevation={4} sx={{ p: 4, textAlign: 'center' }}>
        <Avatar
          src={user?.photoURL || ''}
          alt={user?.displayName || 'User'}
          sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Welcome, {user?.displayName || 'User'}!
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Email: {user?.email}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ mt: 3 }}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;
