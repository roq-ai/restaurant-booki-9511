interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Create a reservation', 'Read menu', 'Create an order'],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage bookings', 'Manage tables'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f82ba579-f74a-4c90-aa39-1b7e6533339b',
};
