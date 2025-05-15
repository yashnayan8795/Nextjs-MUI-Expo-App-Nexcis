// pages/index.tsx
import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import GoogleSignInButton from '../components/GoogleSignInButton';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 5, borderRadius: 4 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Welcome to MyApp
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
            Sign in to continue using your Google account.
          </Typography>

          <Box display="flex" justifyContent="center">
            <GoogleSignInButton />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
