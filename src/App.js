import React from 'react';
import Main from './components/main';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import './assets/scss/App.scss';
import './assets/scss/landing.scss';
import './assets/scss/footer.scss';
import './assets/scss/style.scss';
import './assets/scss/header.scss';

function App() {
  return (
    <div className="App">
      <div id="content-wrap">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
