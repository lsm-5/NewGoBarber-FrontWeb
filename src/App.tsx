import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GLobalStyle />
  </>
);

export default App;
