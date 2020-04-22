import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
// import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// import Routes from './routes';

const App: React.FC = () => (
  <>
    <SignUp />
    <GLobalStyle />
  </>
);

export default App;
