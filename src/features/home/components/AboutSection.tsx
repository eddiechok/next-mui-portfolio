import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ContentSection, Flex } from '@/components/ui';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <ContentSection sx={{ bgcolor: 'background.paper', height: 1 }}>
          <Flex direction="column" justify="center" height={1}>
            <Typography variant="h1" color="text.primary">
              {t('about_title')}
            </Typography>
            <Typography color="text.secondary" mt={6}>
              {t('about_desc')}
            </Typography>
          </Flex>
        </ContentSection>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ bgcolor: 'background.default', width: 1, height: 1, minHeight: 460 }} />
      </Grid>
    </Grid>
  );
};
