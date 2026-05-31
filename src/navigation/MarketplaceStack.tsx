import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MarketplaceScreen } from '../screens/MarketplaceScreen';
import { DealDetailScreen } from '../screens/DealDetailScreen';
import type { MarketplaceStackParamList } from './types';

const Stack = createNativeStackNavigator<MarketplaceStackParamList>();

export function MarketplaceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DealList"
        component={MarketplaceScreen}
        options={{ title: 'Marketplace' }}
      />
      <Stack.Screen
        name="DealDetail"
        component={DealDetailScreen}
        options={{ title: 'Deal' }}
      />
    </Stack.Navigator>
  );
}
