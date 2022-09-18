import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Element } from 'react-scroll';

import { ContentSection, Flex } from '@/components/ui';

export const WorkSection = () => {
  const { t } = useTranslation();

  return (
    <Element name="#work-section">
      <ContentSection sx={{ bgcolor: 'background.paper' }}>
        <Flex direction="column" align="center" justify="space-evenly" gap={10} textAlign="center">
          <Typography variant="h1" color="text.primary" fontWeight="bold">
            {t('work_title')}
          </Typography>
          <Typography color="text.secondary">{t('work_desc')}</Typography>
          <Box
            sx={{ bgcolor: 'background.default', width: 540, height: 461, borderRadius: 4, mt: 10 }}
          />
        </Flex>
      </ContentSection>
    </Element>
  );
};
