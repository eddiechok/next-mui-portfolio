import { PaletteMode, createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import React, { useContext, createContext, PropsWithChildren, useEffect } from 'react';

import { getDesignTokens } from '@/theme';
import storage from '@/utils/storage';

export type AppContextProps = {
  toggleColorMode: () => void;
};

const AppContext = createContext<AppContextProps>({
  toggleColorMode: () => void 0,
});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const providerValue = React.useMemo<AppContextProps>(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          storage.setColorMode(newMode);
          return newMode;
        });
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Update the theme if colorMode found in localStorage, else check user's system color scheme
  useEffect(() => {
    const userColorMode = storage.getColorMode();
    setMode(userColorMode ?? (prefersDarkMode ? 'dark' : 'light'));
  }, [prefersDarkMode]);

  return (
    <AppContext.Provider value={providerValue}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
export default AppProvider;
