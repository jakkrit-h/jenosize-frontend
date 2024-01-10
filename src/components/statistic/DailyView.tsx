'use client';

import { Grid } from '@mui/material';
import InfoBox from './InfoBox';

import { useEffect, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useSelector } from 'react-redux';
import { appSelector } from '@/store/slices/appSlice';

export default function StatisticDailyView() {
  const appReducer = useSelector(appSelector);
  return (
    <>
      {appReducer && (
        <Grid container spacing={2}>
          {appReducer.map((d, i) => {
            return (
              <Grid item xs={6} md={4} lg={3} key={i}>
                <InfoBox
                  icon={d.icon}
                  title={d.title}
                  number={d.number}
                  subTitle={d.subtitle}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}
