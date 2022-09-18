import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Element } from 'react-scroll';

import { ContentSection, Flex } from '@/components/ui';

export const SkillSection = () => {
  const { t } = useTranslation();

  return (
    <Element name="#skill-section">
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
            <Typography variant="h1" fontWeight="bold">
              {t('skill_title')}
            </Typography>
            <Typography color="text.secondary" mt={6} whiteSpace="pre-line">
              {t('skill_desc')}
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
    </Element>
  );
};
