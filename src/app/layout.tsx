import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/themes/ThemeRegistry';

import { Grid } from '@mui/material';
import TopBar from '@/components/shared/TopBar';
import Footer from '@/components/shared/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import StoreProvider from './StoreProvider';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'
config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Jenosize Exam',
};
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("'Asia/Bangkok'")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeRegistry options={{ key: 'mui' }}>
            <Grid
              container
              spacing={0}
              height={'100vh'}
              overflow={'hidden'}
              direction={'column'}
            >
              <Grid item xs="auto">
                <TopBar />
              </Grid>
              <Grid
                item
                xs
                sx={{ overflowY: 'auto', overflowX: 'hidden',  }}
              >
                {children}
              </Grid>
              <Grid item xs="auto">
                <Footer />
              </Grid>
            </Grid>
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
