import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import Pages from 'pages';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ConfigProvider
          theme={{
            components: {
              Input: {},
            },
            token: {
              colorPrimary: '#D4D4D4',
            },
          }}
        >
          <Pages />
        </ConfigProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
