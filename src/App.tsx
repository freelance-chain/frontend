import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import React from 'react';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <route.element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App
