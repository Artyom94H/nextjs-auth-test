import Account from 'components/account';
import { useRecoilValue } from 'recoil';
import { getUser } from 'hooks/use-user';
import { Route, Routes } from 'react-router-dom';
import AccountOwnerEdit from 'pages/accounts/owner/edit';
import { useAuth } from 'hooks/use-auth';

const AccountOwner = () => {
  const user = useRecoilValue(getUser);
  const { logoutUser } = useAuth({});
  return (
    <>
      <Account logout={logoutUser} edit={true} user={user} />
      <Routes>
        <Route
          path={'/edit'}
          element={
            <AccountOwnerEdit />
          }
        />
      </Routes>
    </>

  );
};

export default AccountOwner;
