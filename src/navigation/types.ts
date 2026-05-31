import type { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

export type MarketplaceStackParamList = {
  DealList: undefined;
  DealDetail: { dealId: string };
};

export type AppTabsParamList = {
  MarketplaceTab: NavigatorScreenParams<MarketplaceStackParamList>;
  PortfolioTab: undefined;
  ProfileTab: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppTabsParamList {}
  }
}
