import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ContentSection, Flex } from '@/components/ui';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection>
      <Flex gap={4} align="center" justify="space-between">
        <Box>
          <Typography color="text.secondary">{t('hero_subtitle')}</Typography>
          <Typography variant="h1" color="text.primary" mt={6}>
            {t('hero_title_:special', {
              special: (
                <Box component="span" color="primary.main">
                  {t('hero_title_special')}
                </Box>
              ),
            })}
          </Typography>
        </Box>
        <Box sx={{ bgcolor: 'background.paper', width: 540, height: 461, borderRadius: 4 }} />
      </Flex>
    </ContentSection>
  );
};
