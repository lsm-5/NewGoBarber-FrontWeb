import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GLobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GLobalStyle />
  </Router>
);

export default App;
