import React from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Screen, Text } from '../components';
import { useTheme } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  const theme = useTheme();

  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'space-between', paddingVertical: theme.spacing.xxl }}>
        <View style={{ gap: theme.spacing.md }}>
          <Text variant="display">Atlas Wealth</Text>
          <Text variant="body" color="textSecondary">
            Curated real estate investments, your portfolio, and advice in one place.
          </Text>
        </View>

        <View style={{ gap: theme.spacing.md }}>
          <Button title="Get started" onPress={() => navigation.navigate('SignIn')} />
        </View>
      </View>
    </Screen>
  );
}
