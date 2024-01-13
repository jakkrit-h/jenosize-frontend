'use client';
import { PAGES } from '@/constants';
import { INavBar } from '@/interfaces';
import {
  faChartPie,
  faCheckCircle,
  faCog,
  faEdit,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FooterBottomNavigation() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<number|null>(null);
  const navList: INavBar[] = [
    { pathname: PAGES.WRITE_PAGE, icon: faEdit, label: 'Write' },
    { pathname: PAGES.APPROVAL_PAGE, icon: faCheckCircle, label: 'Approval' },
    { pathname: PAGES.REPORT_OKRS_PAGE, icon: faPaperPlane, label: 'Report' },
    { pathname: PAGES.STATISTIC_PAGE, icon: faChartPie, label: 'Statistic' },
    { pathname: PAGES.SETTING_PAGE, icon: faCog, label: 'Setting' },
  ];
  useEffect(() => {
    const a=navList.findIndex((nav) => new RegExp(`${nav.pathname}$`).test(pathname))
    console.log(a)
    setActiveMenu(
      a
    );
  }, [pathname]);
  return (
    <>
      <BottomNavigation showLabels value={activeMenu}>

        {navList.map((nav, index) => {
          return (
            <BottomNavigationAction
              key={index}
              label={nav.label}
              icon={<FontAwesomeIcon icon={nav.icon} />}
              href={nav.pathname}
            />
          );
        })}
      </BottomNavigation>
    </>
  );
}
