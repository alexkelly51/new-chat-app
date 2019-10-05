import React from 'react';
import './App.css';

import { MessageList } from './MessageList'
import { MessageForm } from './MessageForm'

const App = () => {
  return (
    <div className="app">
      <div>
        Chat place
      </div>
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
