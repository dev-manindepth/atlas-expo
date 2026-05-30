import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
} from 'react-native';

import { useTheme } from '../theme';
import { Text } from './Text';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = Omit<PressableProps, 'style'> & {
  title: string;
  variant?: Variant;
  loading?: boolean;
  fullWidth?: boolean;
};

export function Button({
  title,
  variant = 'primary',
  loading = false,
  fullWidth = true,
  disabled,
  ...rest
}: Props) {
  const theme = useTheme();
  const isDisabled = disabled || loading;

  const background =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'secondary'
        ? theme.colors.surface
        : 'transparent';

  const pressedBackground =
    variant === 'primary'
      ? theme.colors.primaryPressed
      : variant === 'secondary'
        ? theme.colors.border
        : theme.colors.border;

  const textColor =
    variant === 'primary' ? 'textOnPrimary' : 'textPrimary';

  const borderColor =
    variant === 'secondary' ? theme.colors.border : 'transparent';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: pressed && !isDisabled ? pressedBackground : background,
          borderColor,
          borderWidth: variant === 'secondary' ? StyleSheet.hairlineWidth : 0,
          borderRadius: theme.radii.md,
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.lg,
          opacity: isDisabled ? 0.5 : 1,
          alignSelf: fullWidth ? 'stretch' : 'flex-start',
        },
      ]}
      {...rest}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator color={theme.colors[textColor]} />
        ) : (
          <Text variant="title" weight="semibold" color={textColor}>
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
