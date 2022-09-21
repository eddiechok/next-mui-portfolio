import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Page } from '@/features/case-study';
import { CommonKey } from '@/utils/commonKeys';

export type CaseStudyContentProps = {
  page: Page;
};

export const CaseStudyContent = ({ page }: CaseStudyContentProps) => {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        p: {
          xs: 3,
          sm: 4,
        },
      }}
    >
      <Typography variant="h1" fontWeight="bold" mt={10} mb={6}>
        {t(page.title_key)}
      </Typography>
      {page.sections.map((section, i) => (
        <Box key={i}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {t(`${page.title_key}_section_${i}` as CommonKey)}
          </Typography>
          {section.paragraphs.map((paragraph, j) => (
            <Box key={j}>
              <Typography color="text.secondary">
                {t(`${page.title_key}_paragraph_${j}` as CommonKey)}
              </Typography>
              <Grid container spacing={4} mt={6}>
                {paragraph.images.map((image, k) => (
                  <Grid item xs key={k}>
                    <Box
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        p: 2,
                        minWidth: 400,
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${page.title_key}_image_${k}`}
                        layout="responsive"
                        objectFit="contain"
                        width={4}
                        height={3}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      ))}
    </Container>
  );
};
