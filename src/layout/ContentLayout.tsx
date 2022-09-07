import { Container, Toolbar } from '@mui/material';
import { PropsWithChildren } from 'react';

export type ContentLayoutProps = PropsWithChildren;

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {children}
      </Container>
    </>
  );
};
export default ContentLayout;
