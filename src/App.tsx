import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// import Routes from './routes';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Lucaus' }}>
      <SignIn />
    </AuthContext.Provider>
    <GLobalStyle />
  </>
);

export default App;
