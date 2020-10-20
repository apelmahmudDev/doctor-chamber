import React from 'react';
import './App.css';
import Routes from './components/Routes/Routes';
import UserProvider from './components/UserProvider/UserProvider';

function App() {

  return (
    <UserProvider>
      <Routes></Routes>
    </UserProvider>
  );
}

export default App;
