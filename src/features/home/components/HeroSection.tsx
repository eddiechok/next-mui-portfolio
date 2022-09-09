import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ContentSection, Flex } from '@/components/ui';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection>
      <Grid container spacing={6} rowSpacing={10} alignItems="center">
        <Grid
          item
          xs={12}
          md
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Typography color="text.secondary">{t('hero_subtitle')}</Typography>
          <Typography variant="h1" fontWeight="bold" mt={6}>
            {t('hero_title_:special', {
              special: (
                <Box component="span" color="primary.main">
                  {t('hero_title_special')}
                </Box>
              ),
            })}
          </Typography>
        </Grid>
        <Grid item xs={12} md component={Flex} align="center" justify="center">
          <Box
            sx={{
              bgcolor: 'background.paper',
              width: 1,
              maxWidth: 400,
              height: 400,
              borderRadius: 4,
            }}
          />
        </Grid>
      </Grid>
    </ContentSection>
  );
};
