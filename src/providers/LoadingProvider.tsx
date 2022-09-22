import { Backdrop, CircularProgress } from '@mui/material';
import { useIsMutating } from '@tanstack/react-query';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type LoadingContextProps = {
  add: () => void;
  sub: () => void;
};

const LoadingContext = createContext<LoadingContextProps>({
  add: () => void 0,
  sub: () => void 0,
});

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [countLoading, setCountLoading] = useState(0);
  const isMutating = useIsMutating(); // show loading overlay if there's mutation

  const add = useCallback(() => {
    setCountLoading((prev) => prev + 1);
  }, []);

  const sub = useCallback(() => {
    setCountLoading((prev) => prev - 1);
  }, []);

  const providerValue = useMemo<LoadingContextProps>(
    () => ({
      add,
      sub,
    }),
    [add, sub]
  );

  return (
    <LoadingContext.Provider value={providerValue}>
      {children}
      {
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
          open={isMutating + countLoading > 0}
        >
          <CircularProgress color="primary" data-testid="loading" />
        </Backdrop>
      }
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
