'use client';
import { INavBarMap } from '@/interfaces';
import FooterBottomNavigation from './FooterBottomNavigation';
import { usePathname } from 'next/navigation';
import { PAGES } from '@/constants';
import { Box } from '@mui/material';
import OkrFooter from '../report/okrs/OkrFooter';

export default function Footer() {
  const pathname = usePathname();
  const navList: INavBarMap[] = [
    { pathname: PAGES.REPORT_OKRS_PAGE, nav: <OkrFooter /> },

    { pathname: PAGES.ALL, nav: <FooterBottomNavigation /> },
  ];
  console.log(pathname);
  return (
    <Box
      sx={{
        borderTop: (theme) => `1.5px solid ${theme.palette.grey[300]}`,
        p: 0,
        m: 0,
      }}
    >
      {navList.find((nav) => new RegExp(nav.pathname).test(pathname))?.nav}
    </Box>
  );
}
