import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Card, Screen, Text } from '../components';
import { useTheme } from '../theme';
import { DEALS, type Deal } from '../data/deals';
import type { MarketplaceStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<MarketplaceStackParamList, 'DealList'>;

export function MarketplaceScreen({ navigation }: Props) {
  const theme = useTheme();

  const renderItem = ({ item }: { item: Deal }) => (
    <Pressable onPress={() => navigation.navigate('DealDetail', { dealId: item.id })}>
      <Card>
        <View style={{ gap: theme.spacing.xs }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text variant="title">{item.name}</Text>
            <Text variant="label" color="accent" weight="semibold">
              {item.status}
            </Text>
          </View>
          <Text variant="body" color="textSecondary">
            {item.assetType} - {item.location}
          </Text>
          <Text variant="body" color="positive" weight="semibold">
            {item.targetReturn}
          </Text>
        </View>
      </Card>
    </Pressable>
  );

  return (
    <Screen padding="none">
      <FlatList
        data={DEALS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: theme.spacing.lg, gap: theme.spacing.md }}
      />
    </Screen>
  );
}
