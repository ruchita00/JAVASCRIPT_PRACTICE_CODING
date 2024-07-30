//example of iffie
var fullname = "ruchita sagalgile";
var obj = {
  fullname: "hacked full name",
  prop: {
    fullname: "inside prop",
    getFullName: function () {
      return this.fullname;
    },
  },
  getFullName: function () {
    return this.fullname;
  },
  //in arrow function here this refering to window obj
  //incase of normal function this refer to current obj
  getFullNameV2: () => this.fullname, //ruchita sagalgile

  //here iffe hai to isme ye value first execute krega or jo bhi value
  //hai vo getfullnamev3 ko assign ho jayegi
  //but yaha pr getfullnamev3 iski value ek string hai so
  //hum value ko invoke ni kr skte isliye we are getting error
  //TypeError: obj.getFullNameV3 is not a function

  getFullNameV3: (function () {
    return this.fullname;
  })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3());

const ruchita = {
  name: "ruchita sagalgile",
  sayName: function () {
    console.log(this.name);
  },
};

const jhon = {
  name: "Jhone doe",
  sayName: function () {
    console.log(this.name);
  },
};

jhon.sayName.call(ruchita);
jhon.sayName.apply(ruchita);
const newFun = jhon.sayName.bind(ruchita);
newFun();
