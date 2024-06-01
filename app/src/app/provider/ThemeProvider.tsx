import { CssVarsProvider, extendTheme } from '@mui/joy';
import React, { PropsWithChildren } from 'react';

type ThemeProviderProsp = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProsp) {
  const theme = extendTheme({
    components: {
      JoyIconButton: {
        defaultProps: {
          style: {
            borderRadius: 10,
          },
        },
      },
      JoyButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
        defaultProps: {
          style: {
            borderRadius: 10,
          },
        },
      },
    },
    colorSchemes: {
      light: {
        palette: {},
      },
      dark: {
        palette: {
          primary: {},
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme} defaultMode="system" disableNestedContext>
      {children}
    </CssVarsProvider>
  );
}
