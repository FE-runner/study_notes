const worker = new Worker('./worker.js');
let n = 0;
console.log('worker', worker);
worker.postMessage('Main is postting');
console.log('main postted');
worker.onmessage = function(e) {
  console.log('Main is listenning and success', e);
  // if (n < 100) {
  //   worker.postMessage('Main is postting');
  //   n++;
  // }
};
worker.onerror = function(e) {
  console.log('Main is listenning and error', e);
};
// worker.terminate();

const sharedWorker = new SharedWorker('./sharedworker.js')
console.log(sharedWorker)
