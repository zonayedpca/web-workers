import React, { useState } from 'react';

import noWorker from '../utils/no-worker';

const Worker = () => {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
      if(disabled) {
          const value = noWorker();
          setDisabled(false);
          setCount(value);
      } else {
          setCount(0);
          setDisabled(true);
      }
  }

  return (
    <div>
      <h2>Without Web Worker</h2>
      <button onClick={handleClick}>{ disabled ? 'Start' : 'Stop' }</button>
      <pre>{ count }</pre>
    </div>
  )
}

export default Worker;
