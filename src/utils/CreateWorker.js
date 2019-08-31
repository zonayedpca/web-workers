export default class CreateWorker {
  constructor(worker) {;
    let code = worker.toString();
    code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
    code = new Blob([code], { type: 'application/javascript' });
    code = new Worker(URL.createObjectURL(code));
    return code;
  }
}
