
export function failedPromise(grid = []) {
  return Promise.resolve({ grid, success: false });
}

export function timer(delay, prom) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (prom instanceof Promise) {
        prom.then(resolve);
      } else if (typeof prom === 'function') {
        prom().then(resolve);
      } else {
        resolve(prom);
      }
    }, delay);
  });
}
