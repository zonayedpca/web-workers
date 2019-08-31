import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cycling from './components/Cycling';
import Worker from './components/Worker';
import NoWorker from './components/NoWorker';

function App() {
  return (
    <div className="App">
      <Cycling />
      <div className="worker-area">
        <Worker />
        <NoWorker />
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
