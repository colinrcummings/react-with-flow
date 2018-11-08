// @flow
const api = {
  get: new Promise<Array<number>>((resolve, reject) => {
    const err = null;

    if (!err) {
      resolve([1, 2, 3]);
    } else {
      reject(Error(err));
    }
  })
};

export default api;
