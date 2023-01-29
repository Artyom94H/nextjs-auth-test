import { Route, Routes } from 'react-router-dom';

const SetRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map((i) => {
        const { path, Component, props = {} } = i;
        return (
          <Route key={path} path={path} element={<Component {...props} />} />
        );
      })}
    </Routes>
  );
};

export default SetRoutes;
