import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  
  .ant-layout-content {
    display: flex;
    flex-direction: column;
  }
`;
