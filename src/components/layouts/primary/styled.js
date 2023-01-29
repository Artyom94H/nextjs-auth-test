import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  
  .ant-layout-header {
    background-color: #FFFFFF;
    border-bottom: 1px solid #E6E6E6;
  }
  .ant-layout-footer {
    background-color: #FFFFFF;
  }
  .ant-layout-content {
    background-color: ${({ loggedIn }) => loggedIn ? '#FFFFFF' : '#E6E6E6'};
  }
  ${({ centered = true }) => centered && css`
    .ant-layout-content {
      display: flex;
      flex-direction: column;
    }
  `}
`;
