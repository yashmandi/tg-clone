// src/App.jsx
import React from 'react';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <div className="app bg-var(--bg-color) text-var(--text-color)">
      <ChatPage />
    </div>
  );
};

export default App;