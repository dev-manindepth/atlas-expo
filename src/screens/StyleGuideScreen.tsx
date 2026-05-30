import React from 'react';
import { ScrollView, View } from 'react-native';

import { Button, Card, Screen, Text } from '../components';
import { palette, useTheme, useThemeControls } from '../theme';

const BRAND_SWATCHES: { name: string; value: string }[] = [
  { name: 'Brand Blue', value: palette.brandBlue },
  { name: 'Light Blue', value: palette.brandLightBlue },
  { name: 'Yellow', value: palette.brandYellow },
  { name: 'Green', value: palette.brandGreen },
];

export function StyleGuideScreen() {
  const theme = useTheme();
  const { preference, toggle } = useThemeControls();

  return (
    <Screen padding="none">
      <ScrollView
        contentContainerStyle={{ padding: theme.spacing.lg, gap: theme.spacing.xl }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: theme.spacing.xs }}>
          <Text variant="display">Atlas Wealth</Text>
          <Text variant="body" color="textSecondary">
            Design system preview - {theme.scheme} mode (preference: {preference})
          </Text>
        </View>

        <Button
          title={`Switch to ${theme.scheme === 'dark' ? 'light' : 'dark'} mode`}
          variant="secondary"
          onPress={toggle}
        />

        <Section title="Brand palette">
          <View style={{ flexDirection: 'row', gap: theme.spacing.md }}>
            {BRAND_SWATCHES.map((swatch) => (
              <View key={swatch.name} style={{ flex: 1, gap: theme.spacing.xs }}>
                <View
                  style={{
                    height: 56,
                    borderRadius: theme.radii.md,
                    backgroundColor: swatch.value,
                    borderWidth: 1,
                    borderColor: theme.colors.border,
                  }}
                />
                <Text variant="caption" color="textSecondary" center>
                  {swatch.name}
                </Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Typography">
          <Text variant="h1">Heading one</Text>
          <Text variant="h2">Heading two</Text>
          <Text variant="title">Title</Text>
          <Text variant="body">
            Body text for descriptions and most reading content in the app.
          </Text>
          <Text variant="label" color="textSecondary">
            Label for form fields and groupings
          </Text>
          <Text variant="caption" color="textMuted">
            Caption and helper text
          </Text>
        </Section>

        <Section title="Buttons">
          <Button title="Commit capital" variant="primary" />
          <Button title="View documents" variant="secondary" />
          <Button title="Maybe later" variant="ghost" />
          <Button title="Processing" variant="primary" loading />
          <Button title="Unavailable" variant="primary" disabled />
        </Section>

        <Section title="Cards and financial colour">
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

          <Card>
            <Text variant="title">Harbour Point REIT</Text>
            <Text variant="body" color="textSecondary">
              Commercial - Stabilised
            </Text>
            <Text variant="body" color="negative" weight="semibold">
              -1.2% today
            </Text>
          </Card>
        </Section>
      </ScrollView>
    </Screen>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <View style={{ gap: theme.spacing.md }}>
      <Text variant="h2">{title}</Text>
      {children}
    </View>
  );
}
