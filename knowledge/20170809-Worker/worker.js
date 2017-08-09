console.log('WORK TASK:', 'RUNNING');
onmessage = function(e) {
  console.log('worker is listenning', e);
  postMessage('worker is postting');
};
console.log('worker postted');

console.log('worker`s location and navigator', location,navigator)

importScripts('./scriptForWorker.js')
