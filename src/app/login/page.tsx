'use client';
import { firebaseAuth } from '@/authentications/firebase';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import LoginForm from '@/components/login/LoginForm';
import { useSelector } from 'react-redux';
import { userSelector } from '@/store/slices/userSlice';
import ProfileCard from '@/components/profile/ProfileCard';

export default function LoginPage() {
  const userReducer = useSelector(userSelector);

  return (
    <>
      <Container maxWidth={'xs'}>
        {userReducer.credential ? <ProfileCard /> : <LoginForm />}
      </Container>
    </>
  );
}
