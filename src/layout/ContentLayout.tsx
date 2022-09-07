import { Toolbar } from '@mui/material';
import { PropsWithChildren } from 'react';

export type ContentLayoutProps = PropsWithChildren;

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
};
export default ContentLayout;
