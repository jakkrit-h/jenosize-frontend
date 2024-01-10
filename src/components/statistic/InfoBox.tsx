'use client';
import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '../../themes/ThemeRegistry';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  icon?: IconProp;
  title: string;
  number: number;
  subTitle: string;
}
export default function InfoBox({ icon, title, number, subTitle }: IProps) {
  return (
    <Box boxShadow={3} borderRadius={1} pt={3} pb={6}>
      <Stack direction={'column'} alignItems={'center'}>
        <>
          <Typography color={'primary'} variant="body1" mb={5}>
            {icon ? (
              <FontAwesomeIcon icon={icon} style={{ marginInline: 5 }} />
            ) : null}
            {title}
          </Typography>
        </>

        <Typography fontWeight={'bold'} variant="h3">
          {number}
        </Typography>
        <Typography variant="body2" color={(theme) => theme.palette.grey[500]}>
          {subTitle}
        </Typography>
      </Stack>
    </Box>
  );
}
