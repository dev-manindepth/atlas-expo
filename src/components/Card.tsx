import React from 'react';
import { Platform, StyleSheet, View, type ViewProps } from 'react-native';

import { useTheme } from '../theme';
import type { Spacing } from '../theme/tokens';

type Props = ViewProps & {
  padding?: Spacing;
  elevated?: boolean;
};

export function Card({
  padding = 'lg',
  elevated = false,
  style,
  children,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: elevated
            ? theme.colors.surfaceElevated
            : theme.colors.surface,
          borderRadius: theme.radii.lg,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.colors.border,
          padding: theme.spacing[padding],
        },
        elevated && shadow(theme.scheme),
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

function shadow(scheme: 'light' | 'dark') {
  if (scheme === 'dark') {
    return {};
  }
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
    },
    android: {
      elevation: 3,
    },
    default: {},
  });
}
