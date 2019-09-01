import React, { useState } from 'react';

import CreateWorker from '../utils/CreateWorker';
import worker from '../utils/worker';

let workingWorker = new CreateWorker(worker);

const Worker = () => {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(false);

  workingWorker.addEventListener('message', ({ data }) => {
    setCount(data.count);
    setEnabled(false);
  });

  const handleClick = () => {
    if(enabled) {
      workingWorker.terminate();
      setEnabled(false);
    } else {
      workingWorker = new CreateWorker(worker);
      setCount(0);
      workingWorker.postMessage('start');
      setEnabled(true);
    }
  }

  const handlereset = () => {
    setCount(0);
    setEnabled(false);
  }

  return (
    <div className="worker">
      <h2>With Web Worker</h2>
      <button className="start" onClick={handleClick}>{ enabled ? 'Stop' : 'Start' }</button>
      <button className="reset" onClick={handlereset}>Reset</button>
      <pre>{ count }</pre>
    </div>
  )
}

export default Worker;
