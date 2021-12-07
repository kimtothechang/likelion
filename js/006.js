let a = new Set(["a", "b", "c"]);
let b = new Set(["c", "d", "e"]);

console.log([...a].filter((value) => b.has(value)));

console.log([...a].filter((value) => b.has(value)));
