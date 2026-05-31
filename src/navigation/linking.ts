import type { LinkingOptions } from '@react-navigation/native';

import type { AppTabsParamList } from './types';

export const linking: LinkingOptions<AppTabsParamList> = {
  prefixes: ['atlaswealth://', 'https://atlaswealth.app'],
  config: {
    screens: {
      MarketplaceTab: {
        screens: {
          DealList: 'deals',
          DealDetail: 'deals/:dealId',
        },
      },
      PortfolioTab: 'portfolio',
      ProfileTab: 'profile',
    },
  },
};
