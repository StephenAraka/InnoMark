import React from 'react';
import Main from './components/main';
import Header from './components/common/Header';

import './assets/scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
