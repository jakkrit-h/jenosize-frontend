'use client';

import { IPlaceResult, searchPlaces } from '@/api';
import styles from './page.module.css';
import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import { store, useAppDispatch } from '@/store';
import { useSelector } from 'react-redux';
import { searchSelector, setSearch } from '@/store/slices/searchSlice';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { AxiosError } from 'axios';
import LoadingDialog from '@/components/shared/LoadingDialog';

export default function Home() {
  const selector = useSelector(searchSelector);
  const [data, setData] = useState<IPlaceResult>();
  const [loading,setLoading] =useState<boolean>(false);
  const [error, setError] = useState<string>();
  const appDispatch = useAppDispatch();

  useEffect(() => {
    if(selector.length>0){

      onSearch();


    }
  }, [selector]);
  function onSearch() {
    setLoading(true);
    setError(undefined);
    searchPlaces(selector)
      .then((response) => {
        setData(response.data);
      })
      .catch((err:AxiosError) => {
        setError(JSON.stringify(err.message));
      }).finally(()=>{
        setLoading(false);
        appDispatch(setSearch(''));
      });
  }
  return (
    <>
      <Container>
       
        <Grid container my={5} rowGap={3}>
        {error?<Grid item xs={12}><Alert severity='error'>{error}</Alert></Grid>:<>
          {data?.candidates.map((candi, index) => {
            return (
              <Grid
              key={index}
                item
                xs={12}
         
                container
                columnGap={3}
                p={3}
                borderRadius={1}
                boxShadow={2}
                border={(theme) => `1px solid ${theme.palette.grey[300]}`}
              >
                <Grid item xs={12} md={3}>
                  <img
                    src={`${
                      candi.photos
                        ? `https://maps.googleapis.com/maps/api/place/photo?photoreference=${candi.photos[0].photo_reference}&sensor=false&maxheight=1080&maxwidth=1080&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
                        : ''
                    }`}
                    style={{maxWidth:'100%'}}
                  />
                </Grid>
                <Grid item container xs spacing={0}>
                  <Grid item xs={12}>
                    <Typography fontWeight={'bold'}>
                      {candi.name ?? '-'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{candi.formatted_address ?? '-'}</Typography>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Grid item>
                      <Typography fontWeight={'bold'} variant="subtitle2">
                        Rating :{' '}
                        <FontAwesomeIcon icon={faStar} color="#f7b800" />
                        {candi.rating ?? '0.0'}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography fontWeight={'bold'} variant="subtitle2">
                        Status : {candi.business_status ?? '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}</>}
        </Grid>
      </Container>
      <LoadingDialog open={loading}/>
    </>
  );
}
