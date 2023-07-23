interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Smart Contract Developer'],
  customerRoles: ['Trader'],
  tenantRoles: ['Smart Contract Developer'],
  tenantName: 'Startup',
  applicationName: 'etst',
  addOns: [],
};
