import { Box, Typography, AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { IconMenu2 } from '@tabler/icons';

export type NavbarProps = {
  navItems: string[];
  onClose?: () => void;
};

const Navbar = ({ navItems, onClose }: NavbarProps) => {
  return (
    <AppBar component="nav" color="secondary">
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
          Eddie Chok
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button variant="text" key={item} sx={{ color: 'text.primary' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
