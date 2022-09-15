import { Alert, AlertColor, Snackbar, SnackbarProps, useMediaQuery, useTheme } from '@mui/material';
import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';

import useDisclosure from '@/hooks/useDisclosure';

type ToastProps = SnackbarProps & {
  color?: AlertColor;
};

const ToastContext = createContext<{ open: (props?: ToastProps) => void; close: () => void }>({
  open: () => void 0,
  close: () => void 0,
});

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const [snackbarProps, setSnackbarProps] = useState<ToastProps>();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const onOpen = useCallback(
    (props?: ToastProps) => {
      setSnackbarProps(props);
      open();
    },
    [open]
  );

  return (
    <ToastContext.Provider value={{ open: onOpen, close }}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: isMdUp ? 'right' : 'center',
        }}
        open={isOpen}
        onClose={close}
        autoHideDuration={5000}
        {...snackbarProps}
      >
        <Alert onClose={close} elevation={4} severity={snackbarProps?.color} sx={{ width: '100%' }}>
          {snackbarProps?.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
