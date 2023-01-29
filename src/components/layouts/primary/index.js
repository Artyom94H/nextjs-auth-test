import { Layout } from 'antd';
import PrimaryHeader from 'components/layouts/primary/header';
import PrimaryFooter from 'components/layouts/primary/footer';
import { StyledLayout } from 'components/layouts/primary/styled';
import { useUser } from 'hooks/use-user';
import GlobalLoader from 'components/global-loader';

const { Header, Footer, Content } = Layout;

const PrimaryLayout = ({ centered = true, children }) => {
  const { loading } = useUser(false);
  if (loading) return <GlobalLoader />;

  return (
    <StyledLayout centered={centered.toString()}>
      <Header>
        <PrimaryHeader />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <PrimaryFooter />
      </Footer>
    </StyledLayout>
  );
};

export default PrimaryLayout;
