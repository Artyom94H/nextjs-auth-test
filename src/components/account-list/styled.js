import styled from 'styled-components';
import { Col } from 'antd';

export const StyledAccountItem = styled(Col)`
  transition: .3s ease all;
  border-bottom: 1px solid silver;
  padding: 20px;
  :hover {
    background-color: aliceblue;
  }
`;
