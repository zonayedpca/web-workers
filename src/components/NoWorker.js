import React, { useState } from 'react';

import noWorker from '../utils/no-worker';

const Worker = ({ setStatus }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
      setStatus(true);
      setTimeout(() => {
          const counted = noWorker();
          setCount(counted);
          setStatus(false);
      }, 100);
  }

  const handleReset = () => {
      setCount(0);
  }

  return (
    <div>
      <h2>Without Web Worker</h2>
      <button className="start" onClick={handleClick}>Start</button>
      <button className="reset" onClick={handleReset}>Reset</button>
      <pre>{ count }</pre>
    </div>
  )
}

export default Worker;
