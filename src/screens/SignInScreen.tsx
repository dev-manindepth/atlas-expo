import React from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Screen, Text } from '../components';
import { useAuth } from '../auth/AuthContext';
import { useTheme } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export function SignInScreen({ navigation }: Props) {
  const theme = useTheme();
  const { signIn } = useAuth();

  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'center', gap: theme.spacing.xl }}>
        <View style={{ gap: theme.spacing.sm }}>
          <Text variant="h1">Sign in</Text>
          <Text variant="body" color="textSecondary">
            Secure sign-in with biometrics arrives in a later phase. For now this is a mock that
            unlocks the app.
          </Text>
        </View>

        <View style={{ gap: theme.spacing.md }}>
          <Button title="Sign in" onPress={signIn} />
          <Button title="Back" variant="ghost" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </Screen>
  );
}
