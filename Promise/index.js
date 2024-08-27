// Promise.race;

const promise1 = new Promise((res, rej) => setTimeout(res, 500, "data1"));
const promise2 = new Promise((res, rej) => setTimeout(res, 1000, "data2"));

function myPromiseRace(promiseArr) {
  return new Promise((res, rej) => {
    promiseArr.forEach((promise) => {
      promise.then(res).catch(rej);
    });
  });
}
myPromiseRace([promise1, promise2]).then(console.log);

//Promise.all([])=>single promise

const promise11 = new Promise((res, rej) => setTimeout(res, 100, "PROMISE11"));
const promise22 = new Promise((res, rej) => setTimeout(res, 100, "promise22"));

function mypromiseAll(promiseArr) {
  let result = [];
  return new Promise((res, rej) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((data) => {
          result[index] = data;
          if (index === promiseArr.length - 1) {
            res(result);
          }
        })
        .catch((err) => rej(err));
    });
  });
}

mypromiseAll([promise11, promise22])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.all([promise11, promise22])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
