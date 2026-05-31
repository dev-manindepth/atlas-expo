export type Deal = {
  id: string;
  name: string;
  assetType: string;
  location: string;
  targetReturn: string;
  minInvestment: number;
  status: 'Open' | 'Closing soon' | 'Funded';
  summary: string;
};

export const DEALS: Deal[] = [
  {
    id: 'harbour-point',
    name: 'Harbour Point REIT',
    assetType: 'Commercial office',
    location: 'Singapore',
    targetReturn: '8.5% IRR',
    minInvestment: 25000,
    status: 'Open',
    summary:
      'A stabilised Grade A office tower in the central business district with long-term anchor tenants and predictable cash flow.',
  },
  {
    id: 'cedar-grove',
    name: 'Cedar Grove Residential Fund',
    assetType: 'Multi-family residential',
    location: 'Austin, TX',
    targetReturn: '11.2% IRR',
    minInvestment: 50000,
    status: 'Closing soon',
    summary:
      'A value-add residential portfolio in a high-growth metro, targeting rental uplift through phased renovations.',
  },
  {
    id: 'marina-logistics',
    name: 'Marina Logistics Park',
    assetType: 'Industrial / logistics',
    location: 'Rotterdam',
    targetReturn: '9.0% IRR',
    minInvestment: 30000,
    status: 'Open',
    summary:
      'Last-mile logistics warehousing near a major port, benefiting from structural e-commerce demand.',
  },
  {
    id: 'summit-retail',
    name: 'Summit Retail Income Trust',
    assetType: 'Retail',
    location: 'Manchester',
    targetReturn: '7.4% IRR',
    minInvestment: 15000,
    status: 'Funded',
    summary:
      'A diversified neighbourhood retail trust with grocery-anchored centres and inflation-linked leases.',
  },
];

export function getDealById(id: string): Deal | undefined {
  return DEALS.find((deal) => deal.id === id);
}
