import React from 'react';
import { View } from 'react-native';

import { Button, Screen, Text } from '../components';
import { useAuth } from '../auth/AuthContext';
import { useTheme, useThemeControls } from '../theme';

export function ProfileScreen() {
  const theme = useTheme();
  const { signOut } = useAuth();
  const { toggle } = useThemeControls();

  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'space-between', paddingVertical: theme.spacing.lg }}>
        <View style={{ gap: theme.spacing.md }}>
          <Text variant="h1">Profile</Text>
          <Text variant="body" color="textSecondary">
            Account, KYC status, and settings will live here.
          </Text>
        </View>

        <View style={{ gap: theme.spacing.md }}>
          <Button
            title={`Switch to ${theme.scheme === 'dark' ? 'light' : 'dark'} mode`}
            variant="secondary"
            onPress={toggle}
          />
          <Button title="Sign out" variant="ghost" onPress={signOut} />
        </View>
      </View>
    </Screen>
  );
}
