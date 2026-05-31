import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '../theme';
import { Icon, type IconName } from '../components/Icon';
import { MarketplaceStack } from './MarketplaceStack';
import { PortfolioScreen } from '../screens/PortfolioScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import type { AppTabsParamList } from './types';

const Tab = createBottomTabNavigator<AppTabsParamList>();

type TabIcons = { focused: IconName; unfocused: IconName };

const ICONS: Record<keyof AppTabsParamList, TabIcons> = {
  MarketplaceTab: { focused: 'storefront', unfocused: 'storefront-outline' },
  PortfolioTab: { focused: 'pie-chart', unfocused: 'pie-chart-outline' },
  ProfileTab: { focused: 'person', unfocused: 'person-outline' },
};

export function AppTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
        headerStyle: { backgroundColor: theme.colors.surface },
        headerTitleStyle: { color: theme.colors.textPrimary },
        tabBarIcon: ({ color, size, focused }) => {
          const set = ICONS[route.name];
          return <Icon name={focused ? set.focused : set.unfocused} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="MarketplaceTab"
        component={MarketplaceStack}
        options={{ title: 'Marketplace', headerShown: false }}
      />
      <Tab.Screen
        name="PortfolioTab"
        component={PortfolioScreen}
        options={{ title: 'Portfolio' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
