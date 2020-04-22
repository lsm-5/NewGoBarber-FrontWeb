import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// import Routes from './routes';

import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GLobalStyle />
  </>
);

export default App;
