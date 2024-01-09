'use client';
import {
  faChartPie,
  faCheckCircle,
  faCog,
  faEdit,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

export default function FooterBottomNavigation() {
  const [activeMenu, setActiveMenu] = useState<number>(0);
  return (
    <>
      <BottomNavigation
        showLabels
        value={activeMenu}
        onChange={(event, newValue) => {
          setActiveMenu(newValue);
        }}
      >
        <BottomNavigationAction
          label="Write"
          icon={<FontAwesomeIcon icon={faEdit} />}
        />
        <BottomNavigationAction
          label="Approval"
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
        />
        <BottomNavigationAction
          label="Report"
          icon={<FontAwesomeIcon icon={faPaperPlane} />}
        />
        <BottomNavigationAction
          label="Statistic"
          icon={<FontAwesomeIcon icon={faChartPie} />}
        />
        <BottomNavigationAction
          label="Setting"
          icon={<FontAwesomeIcon icon={faCog} />}
        />
      </BottomNavigation>
    </>
  );
}
