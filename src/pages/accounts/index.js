import PrimaryLayout from 'components/layouts/primary';
import SetRoutes from 'components/setRoutes';
import routes from 'pages/accounts/routes';

const AccountsRoutes = () => {
  return (
    <PrimaryLayout>
      <SetRoutes routes={routes} />
    </PrimaryLayout>
  );
};

export default AccountsRoutes;
