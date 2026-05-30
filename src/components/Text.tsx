import React from 'react';
import { StyleSheet, Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { useTheme } from '../theme';
import type { ThemeColors } from '../theme/themes';

type Variant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'title'
  | 'body'
  | 'label'
  | 'caption';

type Props = RNTextProps & {
  variant?: Variant;
  color?: keyof ThemeColors;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  center?: boolean;
};

export function Text({
  variant = 'body',
  color = 'textPrimary',
  weight,
  center,
  style,
  ...rest
}: Props) {
  const theme = useTheme();

  const variantStyle = {
    fontSize: theme.fontSizes[variant],
    lineHeight: theme.lineHeights[variant],
  };

  const defaultWeight =
    variant === 'display' || variant === 'h1' || variant === 'h2'
      ? 'bold'
      : variant === 'title'
        ? 'semibold'
        : 'regular';

  return (
    <RNText
      style={[
        variantStyle,
        {
          color: theme.colors[color],
          fontWeight: theme.fontWeights[weight ?? defaultWeight],
          textAlign: center ? 'center' : 'auto',
        },
        style,
      ]}
      {...rest}
    />
  );
}

export const textStyles = StyleSheet.create({});
