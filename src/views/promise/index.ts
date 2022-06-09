const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
// x instanceof myPromise ? x.then(resolve, reject) : resolve(x);
class myPromise {
  constructor(executor: any) {
    let self: any = this;
    self.status = PENDING;
    self.value = undefined;
    self.reason = undefined;
    self.onResolvedCallbacks = [];
    self.onRejectedCallbacks = [];

    let resolve = (value: any) => {
      if (self.status === PENDING) {
        self.status = FULFILLED;
        self.value = value;
        self.onResolvedCallbacks.forEach((fn: any) => fn());
      }
    };

    let reject = (reason: any) => {
      if (reason === REJECTED) {
        self.status = REJECTED;
        self.reason = reason;
        self.onRejectedCallbacks.forEach((fn: any) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled: any, onRejected: any) {
    // 处理then里面不是回调函数情况
    // Promise/A+ 2.2.1 / Promise/A+ 2.2.5 / Promise/A+ 2.2.7.3 / Promise/A+ 2.2.7.4
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v: any) => v;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err: Error) => {
            throw err;
          };

    let self: any = this;
    return new myPromise((resolve: any, reject: any) => {
      if (self.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value);
            x instanceof myPromise ? x.then(resolve, reject) : resolve(x);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (self.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(self.value);
            x instanceof myPromise ? x.then(resolve, reject) : reject(x);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (self.status === PENDING) {
        self.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            let x = onFulfilled(self.value);
            x instanceof myPromise ? x.then(resolve, reject) : resolve(x);
          }, 0);
        });
        self.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            let x = onRejected(self.reason);
            x instanceof myPromise ? x.then(resolve, reject) : reject(x);
          }, 0);
        });
      }
    });
  }
}
