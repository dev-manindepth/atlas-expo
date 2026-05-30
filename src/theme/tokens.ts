export const palette = {
  // Brand
  brandYellow: '#FFC917',
  brandBlue: '#003082',
  brandLightBlue: '#0063D3',
  brandGreen: '#00C690',

  // Neutrals
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',

  // Yellow ramp
  yellow50: '#FCF6E8',
  yellow100: '#FAEFC7',
  yellow200: '#F7E092',
  yellow300: '#F4CD56',
  yellow400: '#EEB408',
  yellow500: '#D69500',
  yellow600: '#B67500',
  yellow700: '#8A6000',
  yellow800: '#644A07',
  yellow900: '#483913',
  yellow950: '#29250F',

  // Blue ramp
  blue50: '#EFF6FF',
  blue100: '#DEEDFF',
  blue200: '#BFDBFE',
  blue300: '#93C5FD',
  blue400: '#61A6FB',
  blue500: '#348AF4',
  blue600: '#186DDC',
  blue700: '#1F55B2',
  blue800: '#1E448D',
  blue900: '#193370',
  blue950: '#18223F',

  // Teal ramp
  teal50: '#EEFBFD',
  teal100: '#D4F8F9',
  teal200: '#A7ECF2',
  teal300: '#6CDFEC',
  teal400: '#29C5D6',
  teal500: '#00A3B8',
  teal600: '#00819E',
  teal700: '#006781',
  teal800: '#1E4F5D',
  teal900: '#1E3E48',
  teal950: '#15282D',

  // Green ramp
  green50: '#EAFAF4',
  green100: '#D4F9E6',
  green200: '#AFECCF',
  green300: '#77E1B5',
  green400: '#35C899',
  green500: '#00A888',
  green600: '#008672',
  green700: '#107263',
  green800: '#295854',
  green900: '#214440',
  green950: '#142A27',

  // Red ramp
  red50: '#FFF1F2',
  red100: '#FFE4E6',
  red200: '#FECDD3',
  red300: '#FF9EAA',
  red400: '#FF6B70',
  red500: '#F8374B',
  red600: '#E2103D',
  red700: '#BD1133',
  red800: '#7F1A22',
  red900: '#691722',
  red950: '#36181C',

  // Orange ramp
  orange50: '#FEF6EE',
  orange100: '#FBEDD9',
  orange200: '#F8D8B3',
  orange300: '#FFB269',
  orange400: '#FB8B35',
  orange500: '#F2660F',
  orange600: '#D44504',
  orange700: '#AE3F0F',
  orange800: '#7F3319',
  orange900: '#662A16',
  orange950: '#311E16',

  // Purple ramp
  purple50: '#F5F3FE',
  purple100: '#ECE9FC',
  purple200: '#DCD6FB',
  purple300: '#C0B0F8',
  purple400: '#A68CF3',
  purple500: '#926EE4',
  purple600: '#7B55CD',
  purple700: '#6542B7',
  purple800: '#51319B',
  purple900: '#46208F',
  purple950: '#281F3B',

  // Pink ramp
  pink50: '#FDF2F8',
  pink100: '#FCE7F3',
  pink200: '#FAD0E8',
  pink300: '#F7A1CF',
  pink400: '#F275B5',
  pink500: '#EA4294',
  pink600: '#D62270',
  pink700: '#B50E54',
  pink800: '#7F1642',
  pink900: '#6B0F38',
  pink950: '#381023',

  // Gray ramp
  gray25: '#F7F7F9',
  gray50: '#F0F1F3',
  gray75: '#EAEBEE',
  gray100: '#E4E5E8',
  gray200: '#D6D7DC',
  gray300: '#C4C5CB',
  gray400: '#93949A',
  gray500: '#75767C',
  gray600: '#404144',
  gray700: '#333438',
  gray800: '#252528',
  gray900: '#1A1B1D',
  gray950: '#111214',

  // Alpha - white (for overlays on dark surfaces)
  alphaWhite400: 'rgba(237,239,247,0.59)',
  alphaWhite500: 'rgba(240,240,252,0.41)',
  alphaWhite600: 'rgba(242,242,250,0.21)',
  alphaWhite700: 'rgba(240,240,255,0.15)',
  alphaWhite800: 'rgba(245,245,255,0.09)',
  alphaWhite900: 'rgba(250,250,255,0.06)',
  alphaWhite950: 'rgba(255,255,255,0.03)',

  // Alpha - black (for overlays / scrims on light surfaces)
  alphaBlack25: 'rgba(0,0,41,0.03)',
  alphaBlack50: 'rgba(0,16,47,0.06)',
  alphaBlack75: 'rgba(0,9,47,0.08)',
  alphaBlack100: 'rgba(6,15,46,0.11)',
  alphaBlack200: 'rgba(0,6,33,0.16)',
  alphaBlack300: 'rgba(0,2,27,0.23)',
  alphaBlack400: 'rgba(0,1,10,0.44)',
  alphaBlack500: 'rgba(0,1,13,0.58)',
} as const;

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

// Corner radii.
export const radii = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;

export const fontSizes = {
  caption: 12,
  label: 13,
  body: 15,
  title: 17,
  h2: 20,
  h1: 26,
  display: 34,
} as const;

export const lineHeights = {
  caption: 16,
  label: 18,
  body: 22,
  title: 24,
  h2: 26,
  h1: 32,
  display: 40,
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export type Spacing = keyof typeof spacing;
export type Radii = keyof typeof radii;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
