import { PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@/lib/query-client';
import AppProvider from '@/providers/AppProvider';
import LoadingProvider from '@/providers/LoadingProvider';
import ToastProvider from '@/providers/ToastProvider';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <AppProvider>
          <ToastProvider>{children}</ToastProvider>
        </AppProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
};
export default Provider;
