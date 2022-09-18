import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Element } from 'react-scroll';

import { ContentSection, Flex } from '@/components/ui';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Element name="#about-section">
      <Grid container>
        <Grid item xs={12} md={6}>
          <ContentSection sx={{ bgcolor: 'background.paper', height: 1 }}>
            <Flex
              direction="column"
              justify="center"
              height={1}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <Typography variant="h1" fontWeight="bold">
                {t('about_title')}
              </Typography>
              <Typography color="text.secondary" mt={6} whiteSpace="pre-line">
                {t('about_desc')}
              </Typography>
            </Flex>
          </ContentSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'background.default', width: 1, height: 1, minHeight: 460 }} />
        </Grid>
      </Grid>
    </Element>
  );
};
