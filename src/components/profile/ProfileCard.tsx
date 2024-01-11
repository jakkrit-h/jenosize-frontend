import { firebaseAuth } from '@/authentications/firebase';
import { useAppDispatch } from '@/store';
import { setCredential, userSelector } from '@/store/slices/userSlice';
import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ProfileCard() {
  const userReducer = useSelector(userSelector);
  const appDispatch = useAppDispatch();
  const signOut = () => {
    firebaseAuth.signOut();
    appDispatch(setCredential({ credential: null }));
  };
  return (
    <>
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
            Profile
          </Typography>
        </Grid>
        <Grid display={'flex'} item xs={12} justifyContent={'center'}>
          <Avatar
            src={userReducer.credential?.user.photoURL ?? ''}
            sx={{ width: 56, height: 56 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight={'bold'}>
            {userReducer.credential?.user.displayName ??
              userReducer.credential?.user.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={'bold'}>
            Email: {userReducer.credential?.user.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={'bold'}>
            Provider: {userReducer.credential?.providerId}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            onClick={signOut}
          >
            Signout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
