import { Col, Row, Typography, Avatar } from 'antd';
import { StyledAccountItem } from 'components/account-list/styled';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const AccountItem = ({ data = {} }) => {
  return (
    <>
      <StyledAccountItem span={24}>
       <Link to={ROUTES.accountsGuest.path.replace(':id', data.slug)}>
         <Row align='middle'>
           <Col xxl={1} xl={1} lg={1} md={1} xs={4} sm={4}>
             <Avatar />
           </Col>
           <Col xxl={23} xl={23} lg={23} md={23} xs={20} sm={20}>
             <Row justify='space-between'>
               <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                 {data.name}
               </Col>
               <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
                 {data.email}
               </Col>
             </Row>
           </Col>
         </Row>
       </Link>
      </StyledAccountItem>
    </>
  );
};

const AccountList = ({ data = [] }) => {
  return (
    <>
      <Typography.Title>
        Список аккаунтов
      </Typography.Title>
      <Row gutter={[]}>
        {/*<Col span={24}>*/}
        {/*  <Divider />*/}
        {/*</Col>*/}
        {data?.map((i, index) => (
          <AccountItem key={`${i.email}_${index}`} data={i} />
        ))}
      </Row>
    </>
  );
};

export default AccountList;
