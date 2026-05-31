import React from 'react';
import { ScrollView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Card, Screen, Text } from '../components';
import { useTheme } from '../theme';
import { getDealById } from '../data/deals';
import type { MarketplaceStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<MarketplaceStackParamList, 'DealDetail'>;

export function DealDetailScreen({ route }: Props) {
  const theme = useTheme();
  const { dealId } = route.params;
  const deal = getDealById(dealId);

  if (!deal) {
    return (
      <Screen>
        <Text variant="h2">Deal not found</Text>
        <Text variant="body" color="textSecondary">
          No deal exists for id "{dealId}".
        </Text>
      </Screen>
    );
  }

  return (
    <Screen padding="none">
      <ScrollView contentContainerStyle={{ padding: theme.spacing.lg, gap: theme.spacing.lg }}>
        <View style={{ gap: theme.spacing.xs }}>
          <Text variant="h1">{deal.name}</Text>
          <Text variant="body" color="textSecondary">
            {deal.assetType} - {deal.location}
          </Text>
        </View>

        <Card elevated>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ gap: theme.spacing.xs }}>
              <Text variant="label" color="textSecondary">
                Target return
              </Text>
              <Text variant="title" color="positive">
                {deal.targetReturn}
              </Text>
            </View>
            <View style={{ gap: theme.spacing.xs }}>
              <Text variant="label" color="textSecondary">
                Minimum
              </Text>
              <Text variant="title">${deal.minInvestment.toLocaleString()}</Text>
            </View>
          </View>
        </Card>

        <View style={{ gap: theme.spacing.sm }}>
          <Text variant="h2">Overview</Text>
          <Text variant="body" color="textSecondary">
            {deal.summary}
          </Text>
        </View>

        <Button title="Commit capital" />
      </ScrollView>
    </Screen>
  );
}
