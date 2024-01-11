'use client';
import { theme } from '@/themes';
import {
  faAngleDown,
  faHome,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MainNavBar from './MainNavbar';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
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
      <AppBar position="relative">
        <Toolbar
          sx={{
            [theme.breakpoints.down('md')]: { mt: 5, mb: 1 },
            [theme.breakpoints.up('md')]: { mt: 0, mb: 1 },
          }}
        >
          {navList.find((nav) => new RegExp(nav.pathname).test(pathname))?.nav}
        </Toolbar>
      </AppBar>
    </>
  );
}
