import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { PropsWithChildren, useMemo } from 'react';

import { useDisclosure } from '@/hooks/useDisclosure';
import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';
import Sidebar from '@/layout/Sidebar';

export type DefaultLayoutProps = PropsWithChildren;

const drawerWidth = 280;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { t } = useTranslation();
  const [mobileOpened, mobileHandlers] = useDisclosure(false);
  const navItems = useMemo(() => [t('work'), t('skills'), t('case_study'), t('about')], [t]);

  return (
    <>
      <Navbar navItems={navItems} onClose={mobileHandlers.toggle} />
      <Sidebar
        open={mobileOpened}
        onClose={mobileHandlers.toggle}
        drawerWidth={drawerWidth}
        navItems={navItems}
      />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
};

export default DefaultLayout;
