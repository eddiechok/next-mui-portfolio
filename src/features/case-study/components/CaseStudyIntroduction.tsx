import { Typography } from '@mui/material';
import { IconMouse, IconChevronsDown } from '@tabler/icons';
import { useTranslation } from 'next-i18next';

import { Flex } from '@/components/ui';

export type CaseStudyIntroductionProps = { visited: boolean };

export const CaseStudyIntroduction = ({ visited }: CaseStudyIntroductionProps) => {
  const { t } = useTranslation();

  return (
    <>
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
      <Flex
        align="center"
        justify="center"
        direction="column"
        gap={2}
        sx={{
          p: 4,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          animation: 'shakeY 1.5s 2s, shakeY 1.5s 10s',
          opacity: visited ? 0 : 1,
        }}
      >
        <IconMouse size={40} strokeWidth={1.5} />
        <IconChevronsDown />
      </Flex>
    </>
  );
};
