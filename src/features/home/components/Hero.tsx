import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ContentSection, Flex } from '@/components/ui';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <ContentSection>
      <Flex>
        <Typography color="text.secondary">{t('hero_title_:special')}</Typography>
      </Flex>
    </ContentSection>
  );
};
