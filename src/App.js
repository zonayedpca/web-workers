import React, { useState } from 'react';
import './App.css';

import Cycling from './components/Cycling';
import Worker from './components/Worker';
import NoWorker from './components/NoWorker';

function App() {
  const [status, setStatus] = useState(false);

  const handleStatus = stat => {
    setStatus(stat);
  }

  return (
    <div className="App">
      <Cycling status={status} />
      <div className="worker-area">
        <Worker />
        <NoWorker setStatus={handleStatus} />
      </div>
      <footer>
        <ul>
          <li>By <a target="_blank" rel="noopener noreferrer" href="https://zonayed.me">Zonayed</a> with <span className="red">❤</span></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/zonayedpca/web-workers">Source Code</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
