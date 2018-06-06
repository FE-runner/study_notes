- web worker 是运行在后台的 JavaScript，不会影响页面的性能。

- 所有主流浏览器均支持 web worker，除了 Internet Explorer。

- 检测 Web Worker 支持

  ```javascript
  if (typeof Worker !== 'undefined') {
    // Yes! Web worker support!
    // Some code.....
  } else {
    // Sorry! No Web Worker support..
  }
  ```

- 创建 web worker 文件
  ```
  work.js
  ```

- Web Worker 对象
  ```
  const worker = new Worker('/work.js') // 需要绝对路径
  worker.postMessage();
  worker.onmessage=(ev)=>{}
  worker.onerror=(ev)=>{}
  worker.terminate()

  ```
- worker文件的全局作用域
  ```
  worker对象本身
  self.onmessage=()=>{}
  self.postMessage=()=>{}
  self.close()
  ```

- Web Workers 和 DOM

  > 由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：
  >
  > - window 对象
  > - document 对象
  > - parent 对象
