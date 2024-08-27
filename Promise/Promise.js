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
