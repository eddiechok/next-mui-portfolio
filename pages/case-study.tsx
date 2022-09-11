import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineItem,
  timelineDotClasses,
  timelineConnectorClasses,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { IconChevronsDown, IconMouse } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { CloseButton, Flex } from '@/components/ui';
import { NextPageWithLayout } from 'pages/_app';

const CaseStudy: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        p: {
          xs: 3,
          md: 4,
        },
        bgcolor: 'background.paper',
        height: 'fill-available',
      }}
    >
      <Link href="/" replace>
        <CloseButton sx={{ m: 4, position: 'fixed', top: 0, right: 0, zIndex: 1 }} />
      </Link>
      <Timeline
        sx={{
          p: 4,
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',

          [`.${timelineDotClasses.root}`]: {
            bgcolor: '#ADB5BD',
          },
          [`.${timelineConnectorClasses.root}`]: {
            bgcolor: '#DEE2E6',
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
      <Flex
        justify="center"
        align="center"
        textAlign="center"
        direction="column"
        height={1}
        gap={12}
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
        }}
      >
        <IconMouse size={40} strokeWidth={1.5} />
        <IconChevronsDown />
      </Flex>
    </Box>
  );
};

CaseStudy.getLayout = (page) => page;

export default CaseStudy;
