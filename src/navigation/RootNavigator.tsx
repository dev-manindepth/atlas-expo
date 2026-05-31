import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../auth/AuthContext';
import { useTheme } from '../theme';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';
import { linking } from './linking';
import { toNavigationTheme } from './navigationTheme';

export function RootNavigator() {
  const theme = useTheme();
  const { isSignedIn } = useAuth();

  return (
    <NavigationContainer theme={toNavigationTheme(theme)} linking={linking}>
      {isSignedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
