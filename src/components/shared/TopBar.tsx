'use client';
import { theme } from '@/themes';

import { AppBar, Toolbar } from '@mui/material';
import MainNavBar from './MainNavbar';
import { usePathname } from 'next/navigation';

import { INavBarMap } from '@/interfaces';
import { PAGES } from '@/constants';
import OkrNavBar from '../report/okrs/OkrNavBar';
import HomeNavbar from './HomeNavbar';

export default function TopBar() {
  const pathname = usePathname();

  const navList: INavBarMap[] = [
    { pathname: PAGES.REPORT_OKRS_PAGE, nav: <OkrNavBar /> },
    { pathname: PAGES.HOME_PAGE, nav: <HomeNavbar /> },
    { pathname: PAGES.ALL, nav: <MainNavBar /> },
  ];
  return (
    <>
      <AppBar
        position="relative"
        sx={{
          height: '100%',
          [theme.breakpoints.down('md')]: {
            pt: 0,
            mb: 0,
            display: 'flex',
            justifyContent: 'flex-end',
          },
          [theme.breakpoints.up('md')]: {
            pt: 0,
            mb: 0,
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Toolbar sx={{ pb: 0 }}>
          {navList.find((nav) => new RegExp(`${nav.pathname}$`).test(pathname))?.nav}
        </Toolbar>
      </AppBar>
    </>
  );
}
