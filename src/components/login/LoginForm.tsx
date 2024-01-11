import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';
import { firebaseAuth } from '@/authentications/firebase';
import {
  Alert,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '@/store';
import { setCredential } from '@/store/slices/userSlice';
import { useState } from 'react';
import { AxiosError } from 'axios';

interface IForm {
  email: string;
  password: string;
  type: 'login' | 'signup';
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<IForm>();
  const appDispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((credential) => {
        appDispatch(setCredential({ credential: credential }));
      })
      .catch((error: AxiosError) => {
        setErrorMessage(JSON.stringify(error.message));
      });
  };
  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((credential) => {
        appDispatch(setCredential({ credential: credential }));
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
        setErrorMessage(JSON.stringify(error.message));
      });
  };
  const onSubmit = async ({ email, password, type }: IForm) => {
    setErrorMessage(null);

    const pass = await bcrypt.hash(
      password,
      process.env.NEXT_PUBLIC_SALT_KEY ?? 'Anakin'
    );

    if (type === 'login') {
      login(email, pass);
    } else {
      signup(email, pass);
    }
  };
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, googleProvider)
      .then((credential) => {
        appDispatch(setCredential({ credential: credential }));
      })
      .catch((error: AxiosError) => {
        setErrorMessage(JSON.stringify(error.message));
      });
  };
  const loginWithFacebook = () => {
    const googleProvider = new FacebookAuthProvider();
    signInWithPopup(firebaseAuth, googleProvider)
      .then((credential) => {
        appDispatch(setCredential({ credential: credential }));
      })
      .catch((error: AxiosError) => {
        setErrorMessage(JSON.stringify(error.message));
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          justifyContent={'center'}
          rowGap={3}
          p={3}
          my={5}
          boxShadow={2}
          borderRadius={1}
        >
          <Grid item xs={12} textAlign={'center'}>
            <Typography variant="h5" fontWeight={'bold'}>
              Login
            </Typography>
          </Grid>
          {errorMessage && (
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="email"
              type="email"
              {...register('email', { required: true })}
              error={!!errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="password"
              type="password"
              {...register('password', { required: true })}
              error={!!errors.password}
            />
          </Grid>

          <Grid container item xs={12} spacing={1} justifyContent={'center'}>
            <Grid item xs>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disableElevation
                onClick={() => setValue('type', 'login')}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                onClick={() => setValue('type', 'signup')}
              >
                Signup
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} textAlign={'center'} my={2} fontWeight={'bold'}>
            OR
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              onClick={() => loginWithGoogle()}
            >
              Login with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              onClick={() => loginWithFacebook()}
            >
              Login with Facebook
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
