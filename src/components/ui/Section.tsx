import { Box, BoxProps, Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export type ContentSectionProps = PropsWithChildren & BoxProps;

export const ContentSection = ({ children, ...props }: ContentSectionProps) => {
  return (
    <Box component="section" {...props}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {children}
      </Container>
    </Box>
  );
};
