import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme, type Theme } from './themes';

export type ThemePreference = 'system' | 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [preference, setPreference] = useState<ThemePreference>('system');

  const resolvedScheme =
    preference === 'system' ? systemScheme ?? 'light' : preference;

  const theme = resolvedScheme === 'dark' ? darkTheme : lightTheme;

  const toggle = useCallback(() => {
    setPreference(theme.scheme === 'dark' ? 'light' : 'dark');
  }, [theme.scheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, preference, setPreference, toggle }),
    [theme, preference, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx.theme;
}

export function useThemeControls() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeControls must be used within a ThemeProvider');
  }
  const { preference, setPreference, toggle } = ctx;
  return { preference, setPreference, toggle };
}
