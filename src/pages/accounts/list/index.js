import AccountList from 'components/account-list';
import { useAccounts } from 'hooks/use-accounts';
import Container from 'components/container';

const AccountsList = () => {
  const { data, loading } = useAccounts();
  return (
    <Container>
      <AccountList loading={loading} data={data} />
    </Container>
  );
};

export default AccountsList;
