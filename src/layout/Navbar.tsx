import { Typography, AppBar, Button, IconButton, Toolbar, Box, useTheme } from '@mui/material';
import { IconLanguage, IconMenu2, IconMessageCircle, IconMoon, IconSun } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ReactScrollLink, scroller } from 'react-scroll';

import { AppMenu } from '@/components/menu';
import { ContainedIconButton, Flex } from '@/components/ui';
import { NavItem } from '@/layout/DefaultLayout';
import { useApp } from '@/providers/AppProvider';

export type NavbarProps = {
  navItems: NavItem[];
  onClose?: () => void;
};

const Navbar = ({ navItems, onClose }: NavbarProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { toggleColorMode } = useApp();
  const router = useRouter();

  return (
    <AppBar component="nav" color="secondary" elevation={2}>
      <Toolbar sx={{ gap: 2 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onClose}
          sx={{ display: { md: 'none' } }}
        >
          <IconMenu2 />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', display: { xs: 'none', md: 'block' }, mr: 4 }}
        >
          {t('app_name')}
        </Typography>
        <Flex align="center" sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          {navItems.map((item) => (
            <Box
              component={item.link.startsWith('#') ? ReactScrollLink : Link}
              href={item.link}
              key={item.link}
              to={item.link}
              smooth
              offset={-(theme.mixins.toolbar.minHeight || 0)}
              spy
              sx={{
                textDecoration: 'none',
                '&.active > *': {
                  color: 'primary.main',
                },
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: 'text.primary',
                  typography: 'h6',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            </Box>
          ))}
        </Flex>
        <AppMenu>
          <AppMenu.Button as={IconButton} color="inherit" sx={{ ml: 'auto' }}>
            <IconLanguage />
          </AppMenu.Button>
          <AppMenu.List
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <AppMenu.Item selected={router.locale === 'en'}>
              <Link href={router.pathname} locale="en">
                English
              </Link>
            </AppMenu.Item>
            <AppMenu.Item selected={router.locale === 'zh'}>
              <Link href={router.pathname} locale="zh">
                繁体中文
              </Link>
            </AppMenu.Item>
          </AppMenu.List>
        </AppMenu>
        <IconButton color="inherit" onClick={toggleColorMode}>
          {theme.palette.mode === 'light' ? <IconSun /> : <IconMoon />}
        </IconButton>
        <ContainedIconButton color="primary" sx={{ display: { sm: 'none' } }}>
          <IconMessageCircle />
        </ContainedIconButton>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button
            disableElevation
            endIcon={<IconMessageCircle />}
            onClick={() =>
              scroller.scrollTo('#contact-me-section', {
                smooth: true,
                spy: true,
                offset: -(theme.mixins.toolbar.minHeight || 0),
              })
            }
          >
            {t('contact_me')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
