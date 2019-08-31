const worker = () => {
  let count = 0;
  const countFunc = () => {
    while(count < 1000000000) {
      count++;
    }
  }
  const sentData = () => {
    // eslint-disable-next-line no-restricted-globals
    self.postMessage({ count })
  }

  // eslint-disable-next-line no-restricted-globals
  self.onmessage = () => {
    countFunc();
    sentData();
  }
}

export default worker;
