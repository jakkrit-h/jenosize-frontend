'use client';
import { PAGES } from '@/constants';
import { useAppDispatch } from '@/store';
import { setSearch } from '@/store/slices/searchSlice';
import { theme } from '@/themes';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function HomeNavbar() {
  const inputRef = useRef<HTMLInputElement>();
  const appDispatch = useAppDispatch();

  return (
    <Grid container direction={'row'} spacing={3} alignItems={'center'} py={1}>
      <Grid item xs>
        <Button href={PAGES.HOME_PAGE}>
          <Grid
            container
            spacing={3}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Grid item xs="auto" display={'flex'} alignItems={'center'}>
              <Image
                src="/favicon.ico"
                width={35}
                height={35}
                priority
                alt=""
              />
            </Grid>

            {useMediaQuery(theme.breakpoints.up('md')) && (
              <Grid item xs>
                <Typography
                  fontWeight={'bold'}
                  variant="h6"
                  color={(theme) => theme.palette.primary.contrastText}
                >
                  Jenosize test
                </Typography>
              </Grid>
            )}
          </Grid>
        </Button>
      </Grid>

      <Grid container item xs justifyContent={'flex-end'}>
        <TextField
          inputRef={inputRef}
          label="search"
          sx={{
            '& label,& input,& svg': {
              color: (theme) =>
                `${theme.palette.primary.contrastText} !important`,
            },
          }}
          placeholder="search"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
  
                  appDispatch(setSearch(inputRef.current?.value));
                  if (inputRef.current) {
                    inputRef.current.value = '';
                  }
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </IconButton>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
