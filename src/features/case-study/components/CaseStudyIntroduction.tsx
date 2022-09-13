import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { Flex } from '@/components/ui';

export const CaseStudyIntroduction = () => {
  const { t } = useTranslation();
  return (
    <Flex
      justify="center"
      align="center"
      textAlign="center"
      direction="column"
      height={1}
      gap={12}
      bgcolor="background.paper"
    >
      <Typography variant="h1" fontWeight="bold">
        {t('introduction')}
      </Typography>
      <Typography color="text.secondary">{t('introduction_desc')}</Typography>
    </Flex>
  );
};
