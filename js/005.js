let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log(temp);

let o = {
  a: "aa",
  b: "bb",
};

let newtemp = new Map(Object.entries(o));

console.log(newtemp);
