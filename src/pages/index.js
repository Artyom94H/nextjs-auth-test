import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { Typography } from 'antd';
import PrimaryLayout from 'components/layouts/primary';
import SignIn from 'pages/sign-in';
import SignUp from 'pages/sign-up';
import Accounts from 'pages/accounts';
import { useUser } from 'hooks/use-user';

//2029db60-fc69-4e84-9c9e-f191f41448ec

const TempHome = () => {
  return (
    <PrimaryLayout>
      <Typography.Title>Home</Typography.Title>
    </PrimaryLayout>
  );
};

const Pages = () => {
  useUser(false);

  return (
    <Routes>
      <Route
        path={ROUTES.home.path}
        exact={ROUTES.home.exact}
        element={<TempHome />}
      />
      <Route
        path={ROUTES.signIn.path}
        exact={ROUTES.signIn.exact}
        element={<SignIn />}
      />
      <Route
        path={ROUTES.signUp.path}
        exact={ROUTES.signUp.exact}
        element={<SignUp />}
      />
      <Route
        path={ROUTES.accounts.path}
        element={<Accounts />}
      />
    </Routes>
  );
};

export default Pages;
