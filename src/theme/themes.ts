import { palette, spacing, radii, fontSizes, lineHeights, fontWeights } from './tokens';

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceElevated: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnPrimary: string;
  border: string;
  primary: string;
  primaryPressed: string;
  accent: string;
  positive: string;
  negative: string;
  warning: string;
};

const lightColors: ThemeColors = {
  background: palette.gray25,
  surface: palette.white,
  surfaceElevated: palette.white,
  textPrimary: palette.gray900,
  textSecondary: palette.gray600,
  textMuted: palette.gray400,
  textOnPrimary: palette.white,
  border: palette.gray200,
  primary: palette.brandBlue,
  primaryPressed: palette.blue950,
  accent: palette.brandYellow,
  positive: palette.green600,
  negative: palette.red600,
  warning: palette.orange500,
};

const darkColors: ThemeColors = {
  background: palette.gray950,
  surface: palette.gray900,
  surfaceElevated: palette.gray800,
  textPrimary: palette.gray50,
  textSecondary: palette.gray300,
  textMuted: palette.gray500,
  textOnPrimary: palette.white,
  border: palette.gray700,
  primary: palette.brandLightBlue,
  primaryPressed: palette.blue400,
  accent: palette.brandYellow,
  positive: palette.green400,
  negative: palette.red400,
  warning: palette.orange400,
};

const shared = {
  spacing,
  radii,
  fontSizes,
  lineHeights,
  fontWeights,
} as const;

export type Theme = typeof shared & {
  scheme: 'light' | 'dark';
  colors: ThemeColors;
};

export const lightTheme: Theme = {
  ...shared,
  scheme: 'light',
  colors: lightColors,
};

export const darkTheme: Theme = {
  ...shared,
  scheme: 'dark',
  colors: darkColors,
};
