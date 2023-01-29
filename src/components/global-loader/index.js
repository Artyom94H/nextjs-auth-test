import { Spin } from 'antd';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const GlobalLoader = () => {
  return (
    <StyledWrapper>
      <Spin size='large' />
    </StyledWrapper>
  );
};

export default GlobalLoader;
