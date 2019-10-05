import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MessageList } from './MessageList'

const App = () => {
  return (
    <div className="app">
      <div>
        Chat place
      </div>
      <MessageList />
    </div>
  );
};

export default App;
