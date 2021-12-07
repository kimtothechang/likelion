let m = new Map();

m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

console.log(m.get("하나"));
console.log(m.get(true));

console.log(m.has("하나"));

console.log(m.size);
