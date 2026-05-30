import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from './src/theme';
import { StyleGuideScreen } from './src/screens/StyleGuideScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StyleGuideScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
