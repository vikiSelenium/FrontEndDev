import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'auth'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleNavigateToAuth = () => {
    setCurrentPage('auth');
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage 
          isLoggedIn={isLoggedIn}
          onLoginClick={handleNavigateToAuth}
          onSignupClick={handleNavigateToAuth}
        />
      )}
      
      {currentPage === 'auth' && (
        <AuthPage 
          onSuccess={handleAuthSuccess} 
          onBack={() => setCurrentPage('home')} 
        />
      )}
    </div>
  );
}

export default App;