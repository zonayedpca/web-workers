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
        Footer
      </footer>
    </div>
  );
}

export default App;
