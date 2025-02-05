// src/pages/Auth.tsx
import { useState } from 'react';
import { Button, Box } from '@mui/material';
// import { auth, googleProvider } from '../firebaseConfig';
// import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    // try {
    //   const result = await signInWithPopup(auth, googleProvider);
    //   if (result.user) {
    //     localStorage.setItem('user', JSON.stringify(result.user));
    //     navigate('/dashboard');
    //   }
    // } catch (error: any) {
    //   setError(error.message);
    // }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding="20px">
      <h2>Sign in with Google</h2>
      <Button onClick={handleGoogleSignIn} variant="contained">Sign In with Google</Button>
      {error && <Box color="red">{error}</Box>}
    </Box>
  );
};

export default Auth;
