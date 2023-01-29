import Account from 'components/account';
import { useAccounts } from 'hooks/use-accounts';

const AccountGuest = () => {
  const { singleData, loading } = useAccounts(true);
  return (
    <>
      <Account edit={false} loading={loading} user={singleData} />
    </>
  );
};

export default AccountGuest;
