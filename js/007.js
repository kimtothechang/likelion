function getLotto() {
  let numbers = [];
  let temp;

  while (numbers.length < 6) {
    temp = Math.floor(Math.random() * 45) + 1;

    if (numbers.indexOf(temp) < 0) {
      numbers.push(temp);
    }
  }

  return numbers.sort((a, b) => a - b);
}

console.log(getLotto());
