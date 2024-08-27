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
