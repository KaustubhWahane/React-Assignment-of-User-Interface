import React from 'react';
import UserProvider from './components/UserProvider';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>All 10 Users by Fake API</h1>
      <UserProvider />
    </div>
  );
}

export default App;
