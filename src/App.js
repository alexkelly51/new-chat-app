import React from 'react';
import './App.css';

import { MessageListContainer } from './MessageListContainer'
import { MessageFormContainer } from './MessageFormContainer'

const App = () => {
  return (
    <div className="app">
      <div>
        Chat place
      </div>
      <MessageListContainer />
      <MessageFormContainer />
    </div>
  );
};

export default App;
