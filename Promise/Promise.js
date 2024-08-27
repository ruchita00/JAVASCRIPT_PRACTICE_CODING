//Promise.allSettled

const promise1 = new Promise((res, rej) => setTimeout(res, 500, "data1"));
const promise2 = new Promise((res, rej) => setTimeout(rej, 1500, "data2"));

function mypromiseSettled(promiseArr) {
  const promises = promiseArr.map((promise) => {
    return promise
      .then((data) => {
        return {
          value: data,
          status: "fulfil",
        };
      })
      .catch((err) => {
        return {
          reason: err,
          status: "rejected",
        };
      });
  });
  return Promise.all(promises);
}

Promise.allSettled([promise1, promise2]).then(console.log);
mypromiseSettled([promise1, promise2]).then(console.log);

//promise.any
const promise11 = new Promise((res, rej) => setTimeout(rej, 3500, "data1"));
const promise12 = new Promise((res, rej) => setTimeout(res, 1500, "data2"));

function myPromiseAny(promiseArr) {
  let errors = [];
  return new Promise((res, rej) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((data) => {
          res(data);
        })
        .catch((error) => {
          errors[index] = error;
          if (index === promiseArr.length - 1) {
            rej(new AggregateError(errors, "all promises were rejected"));
          }
        });
    });
  });
}

myPromiseAny([promise11, promise12])
  .then(console.log)
  .catch((err) => console.error(err.message));
