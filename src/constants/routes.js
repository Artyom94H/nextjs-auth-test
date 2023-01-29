const HomePage = '/';

export const ROUTES = {
  home: {
    path: `${HomePage}`,
    exact: true,
  },
  signIn: {
    path: `${HomePage}sign-in`,
    exact: true,
  },
  signUp: {
    path: `${HomePage}sign-up`,
    exact: true,
  },
  accounts: {
    path: `${HomePage}accounts/*`,
    exact: true,
  },
  accountsGuest: {
    path: `${HomePage}accounts/guest/:id`,
    exact: true,
  },
  accountsOwner: {
    path: `${HomePage}accounts/owner`,
    exact: true,
  },
  accountsOwnerEdit: {
    path: `${HomePage}accounts/owner/edit`,
    exact: false,
  },
};
