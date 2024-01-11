'use client';

import { PAGES } from '@/constants';
import { Button, Container, Stack, Typography } from '@mui/material';

export default function SettingPage() {
  return (
    <>
      <Container maxWidth={'sm'}>
        <Stack spacing={3} textAlign={'center'}>
          <Typography variant="h3" fontWeight={'bold'}>
            SETTING PAGE
          </Typography>
          <Button variant="contained" href={PAGES.LOGIN_PAGE}>
            Login Page
          </Button>
          <Button variant="contained" href={PAGES.GAME_XO_PAGE}>
            Game XO Page
          </Button>
        </Stack>
      </Container>
    </>
  );
}
