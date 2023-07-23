const mapping: Record<string, string> = {
  startups: 'startup',
  'trade-orders': 'trade_order',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
