import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  
  ${({ centered = true }) => centered && css`
    .ant-layout-content {
      display: flex;
      flex-direction: column;
    }
  `}
  
`;
