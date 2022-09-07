import { Box, Typography, AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { IconMenu2 } from '@tabler/icons';

export type NavbarProps = {
  navItems: string[];
  onClose?: () => void;
};

const Navbar = ({ navItems, onClose }: NavbarProps) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onClose}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <IconMenu2 />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
