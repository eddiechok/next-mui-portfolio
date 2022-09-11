import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { CloseButton } from '@/components/ui';
import { NavItem } from '@/layout/DefaultLayout';

export type SidebarProps = {
  open: boolean;
  onClose?: () => void;
  drawerWidth: number;
  navItems: NavItem[];
};

const Sidebar = ({ open, onClose, drawerWidth, navItems }: SidebarProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: {
              xs: 1,
              sm: drawerWidth,
            },
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight="bold" flexGrow={1}>
            {t('app_name')}
          </Typography>
          <CloseButton onClick={onClose} />
        </Toolbar>
        <Divider />
        <Box p={3}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.link}>
                <ListItemButton onClick={() => router.push(item.link)}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ variant: 'h4', fontWeight: 'bold' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Sidebar;
