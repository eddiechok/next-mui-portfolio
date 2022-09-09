import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { IconBrandGithub, IconBrandLinkedin, IconCopyright } from '@tabler/icons';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="secondary" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <IconCopyright />
        <Typography variant="h6" fontWeight="bold" mr={2}>
          {t('copyright_year')}
        </Typography>
        <Typography variant="h6" flexGrow={1} fontWeight="bold">
          {t('app_name')}
        </Typography>
        <IconButton color="inherit">
          <IconBrandLinkedin />
        </IconButton>
        <IconButton color="inherit">
          <IconBrandGithub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
