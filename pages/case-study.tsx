import ReactFullPage from '@fullpage/react-fullpage';
import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineItem,
  timelineDotClasses,
  timelineConnectorClasses,
  timelineItemClasses,
} from '@mui/lab';
import { Box } from '@mui/material';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';

import { CloseButton } from '@/components/ui';
import { CaseStudyContent, CaseStudyIntroduction, getCaseStudy, Page } from '@/features/case-study';
import { NextPageWithLayout } from 'pages/_app';

type CaseStudyProps = {
  pages?: Page[];
};

const CaseStudy: NextPageWithLayout<CaseStudyProps> = ({ pages }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const anchors = ['introduction', ...(pages ? pages.map((page) => page.title_key) : [])];
  const [visitedIntro, setVisitedIntro] = useState(false);

  return (
    <>
      <Link href="/" replace>
        <CloseButton sx={{ m: 4, position: 'fixed', top: 0, right: 0, zIndex: 2 }} />
      </Link>
      <Timeline
        id="pageMenu"
        sx={{
          p: 4,
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          zIndex: 1,
          [`.${timelineDotClasses.root}`]: {
            bgcolor: 'grey.300',
            transition: 'all .5s',
          },
          [`.${timelineConnectorClasses.root}`]: {
            bgcolor: 'grey.400',
            transition: 'all .5s',
          },
        }}
      >
        {anchors.map((anchor, i) => (
          <TimelineItem
            key={anchor}
            data-menuanchor={anchor}
            sx={{
              [`&.${timelineItemClasses.root} .${timelineDotClasses.root}`]: {
                bgcolor:
                  activeIndex === i ? 'primary.main' : i < activeIndex ? 'text.primary' : undefined,
              },
              [`&.${timelineItemClasses.root} .${timelineConnectorClasses.root}`]: {
                bgcolor: i < activeIndex ? 'text.primary' : undefined,
              },
            }}
          >
            <TimelineSeparator>
              <a href={`#${anchor}`}>
                <TimelineDot />
              </a>
              {i < anchors.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
          </TimelineItem>
        ))}
      </Timeline>
      <Box
        sx={{
          '.fp-overflow': {
            height: 1,
          },
        }}
      >
        <ReactFullPage
          menu="#pageMenu"
          anchors={anchors}
          onLeave={(_, destination) => {
            setActiveIndex(destination.index);
            destination.index === 0 && setVisitedIntro(true);
          }}
          render={() => (
            <ReactFullPage.Wrapper>
              <Box className="section" height={1}>
                <CaseStudyIntroduction visited={visitedIntro} />
              </Box>
              {pages?.map((page) => (
                <Box key={page.title_key} className="section" height={1}>
                  <CaseStudyContent page={page} />
                </Box>
              ))}
            </ReactFullPage.Wrapper>
          )}
        />
      </Box>
    </>
  );
};

CaseStudy.getLayout = (page) => page;

export const getStaticProps: GetStaticProps<CaseStudyProps> = async () => {
  const caseStudy = await getCaseStudy();

  return {
    props: {
      pages: caseStudy.data,
    },
  };
};

export default CaseStudy;
