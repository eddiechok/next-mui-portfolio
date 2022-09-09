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

import { CloseButton } from '@/components/ui';

export type SidebarProps = {
  open: boolean;
  onClose?: () => void;
  drawerWidth: number;
  navItems: string[];
};

const Sidebar = ({ open, onClose, drawerWidth, navItems }: SidebarProps) => {
  const { t } = useTranslation();

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
              <ListItem key={item}>
                <ListItemButton>
                  <ListItemText
                    primary={item}
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
