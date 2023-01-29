import { Layout } from 'antd';
import PrimaryHeader from 'components/layouts/primary/header';
import PrimaryFooter from 'components/layouts/primary/footer';
import { StyledLayout } from 'components/layouts/primary/styled';

const { Header, Footer, Content } = Layout;

const PrimaryLayout = ({ children }) => {
  return (
    <StyledLayout>
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
