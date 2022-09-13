import { PropsWithChildren } from 'react';

import AppProvider from '@/providers/AppProvider';
import ToastProvider from '@/providers/ToastProvider';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <AppProvider>
      <ToastProvider>{children}</ToastProvider>
    </AppProvider>
  );
};
export default Provider;
