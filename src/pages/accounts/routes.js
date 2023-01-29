import AccountOwner from 'pages/accounts/owner';
import AccountList from 'pages/accounts/list';
import AccountGuest from 'pages/accounts/guest';

const routes = [
  {
    path: '/list/*',
    Component: AccountList,
  },
  {
    path: '/guest/:id',
    Component: AccountGuest,
  },
  {
    path: '/owner/*',
    Component: AccountOwner,
  },
];

export default routes;
