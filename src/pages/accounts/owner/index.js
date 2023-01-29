import Account from 'components/account';
import { useRecoilValue } from 'recoil';
import { getUser } from 'hooks/use-user';
import { Route, Routes } from 'react-router-dom';
import AccountOwnerEdit from 'pages/accounts/owner/edit';

const AccountOwner = () => {
  const user = useRecoilValue(getUser);
  return (
    <>
      <Account edit={true} user={user} />
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
