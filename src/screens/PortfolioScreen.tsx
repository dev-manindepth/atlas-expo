import React from 'react';
import { ScrollView, View } from 'react-native';

import { Card, Screen, Text } from '../components';
import { useTheme } from '../theme';

export function PortfolioScreen() {
  const theme = useTheme();

  return (
    <Screen padding="none">
      <ScrollView contentContainerStyle={{ padding: theme.spacing.lg, gap: theme.spacing.lg }}>
        <Card elevated>
          <Text variant="label" color="textSecondary">
            Total portfolio value
          </Text>
          <Text variant="h1">$1,284,500</Text>
          <View style={{ flexDirection: 'row', gap: theme.spacing.md, marginTop: theme.spacing.sm }}>
            <Text variant="body" color="positive" weight="semibold">
              +$42,300 (3.4%)
            </Text>
            <Text variant="body" color="textMuted">
              this quarter
            </Text>
          </View>
        </Card>

        <View style={{ gap: theme.spacing.sm }}>
          <Text variant="h2">Holdings</Text>
          <Text variant="body" color="textSecondary">
            Charts and detailed holdings arrive in a later phase.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
