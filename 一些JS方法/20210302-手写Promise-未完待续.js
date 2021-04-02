class MyPromise {
  constructor(fn) {
    this.resolvedCbs = [];
    this.rejectedCbs = [];

    this.state = 'PENDING';
    this.value = '';
    fn(this.resolve.bind(this), this.rejectedCbs.bind(this));
  }

  resolve(value) {
    if (this.state === 'PENDING') {
      this.state = 'RESOLVED';
      this.value = value;
      this.resolvedCbs.forEach((cb) => {
        cb(value);
      });
    }
  }
  reject(value) {
    if ((this.state = 'PENDING')) {
      this.state = 'REJECTED';
      this.value = value;
      this.rejectedCbs.forEach((cb) => {
        cb(value);
      });
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'PENDING') {
      this.rejectedCbs.push(onFulfilled);
      this.rejectedCbs.push(onRejected);
    }
    if (this.state === 'REJECTED') {
      onFulfilled(this.value);
    }
    if (this.state === 'REJECTED') {
      onRejected(this.value);
    }
  }
  catch(onRejected) {}
}
