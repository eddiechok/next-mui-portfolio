import { QueryClient } from '@tanstack/react-query';

/**
 * Setup React Query
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failCount, error: any) => {
        // if is unauthorized/running test doesn't need retry, else retry 2 times
        if (process.env.NODE_ENV === 'test' || error?.code === '401' || failCount + 1 === 2) {
          return false;
        }
        return true;
      },
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console for tests
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
});
