import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import Pages from 'pages';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ConfigProvider>
          <Pages />
        </ConfigProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
