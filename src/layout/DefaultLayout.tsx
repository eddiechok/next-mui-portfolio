import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

import { useDisclosure } from '@/hooks/useDisclosure';
import Navbar from '@/layout/Navbar';
import Sidebar from '@/layout/Sidebar';

export type DefaultLayoutProps = PropsWithChildren;

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [mobileOpened, mobileHandlers] = useDisclosure(false);

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
    </>
  );
};

export default DefaultLayout;
