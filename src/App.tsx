import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import Routes from './routes';

const App: React.FC = () => (
  <>
    <SignIn />
    <GLobalStyle />
  </>
);

export default App;
