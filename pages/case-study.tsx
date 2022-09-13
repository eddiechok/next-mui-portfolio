import ReactFullPage from '@fullpage/react-fullpage';
import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineItem,
  timelineDotClasses,
  timelineConnectorClasses,
} from '@mui/lab';
import { Box } from '@mui/material';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';

import { CloseButton } from '@/components/ui';
import { CaseStudyContent, CaseStudyIntroduction } from '@/features/case-study';
import { CommonKey } from '@/utils/commonKeys';
import { NextPageWithLayout } from 'pages/_app';

export type Page = {
  title_key: CommonKey;
  sections: {
    paragraphs: {
      images: string[];
    }[];
  }[];
};

type CaseStudyProps = {
  pages: Page[];
};

const CaseStudy: NextPageWithLayout<CaseStudyProps> = ({ pages }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const anchors = ['introduction', ...pages.map((page) => page.title_key)];
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
              [`& .${timelineDotClasses.root}`]: {
                bgcolor:
                  activeIndex === i ? 'primary.main' : i < activeIndex ? 'text.primary' : undefined,
              },
              [`& .${timelineConnectorClasses.root}`]: {
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
              {pages.map((page) => (
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

export const getStaticProps: GetStaticProps<CaseStudyProps> = async (ctx) => {
  return {
    props: {
      pages: [
        {
          title_key: 'planning',
          sections: [
            {
              paragraphs: [
                {
                  images: [
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                  ],
                },
              ],
            },
          ],
        },
        {
          title_key: 'development',
          sections: [
            {
              paragraphs: [
                {
                  images: [
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                  ],
                },
              ],
            },
          ],
        },
        {
          title_key: 'testing',
          sections: [
            {
              paragraphs: [
                {
                  images: [
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                  ],
                },
              ],
            },
          ],
        },
        {
          title_key: 'deployment',
          sections: [
            {
              paragraphs: [
                {
                  images: [
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };
};

export default CaseStudy;
