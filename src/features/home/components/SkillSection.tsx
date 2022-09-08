import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ContentSection, Flex } from '@/components/ui';

export const SkillSection = () => {
  const { t } = useTranslation();

  return (
    <ContentSection>
      <Flex gap={4} align="center" justify="space-between">
        <Box>
          <Typography variant="h1" color="text.primary">
            {t('skill_title')}
          </Typography>
          <Typography color="text.secondary" mt={6}>
            {t('skill_desc')}
          </Typography>
        </Box>
        <Box sx={{ bgcolor: 'background.paper', width: 540, height: 461, borderRadius: 4 }} />
      </Flex>
    </ContentSection>
  );
};
