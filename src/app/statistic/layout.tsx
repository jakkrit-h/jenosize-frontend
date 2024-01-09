import FooterBottomNavigation from '@/components/shared/FooterBottomNavigation';
import TopBar from '@/components/shared/TopBar';
import { Children, ReactNode } from 'react';

export default function StatisticPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* <TopBar /> */}
      {children}
      <FooterBottomNavigation />
    </>
  );
}
