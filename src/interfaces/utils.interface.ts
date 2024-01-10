import { PAGES } from '@/constants';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export interface INavBarMap {
  nav: ReactNode;
  pathname: PAGES;
}
export interface INavBar {
  label: string;
  pathname: PAGES;
  icon: IconProp;
}
