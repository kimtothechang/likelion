// const userSelect = document.querySelector("#first li:first-child input")

// function numberRandom(event) {
//     event.preventDefault();
//     const selectNumber = userSelect.value;
//     localStorage.setItem("selectNumber", selectNumber);
// }

const maxNumber = document.querySelector("#input1");
const selectNumber = document.querySelector("#input2");

const youChoose = document.querySelector(".output1");
const machineChoose = document.querySelector(".output2");
const result = document.querySelector(".result");

const play = document.querySelector("#btn");

play.addEventListener("click", function () {
  const machineNumber = Math.floor(Math.random() * parseInt(maxNumber.value) + 1);
  const yourNumber = parseInt(selectNumber.value);

  if (selectNumber.value == machineNumber) {
    result.innerText = "you win";
  } else {
    result.innerText = "you lose";
  }

  youChoose.innerText = `${yourNumber}`;
  machineChoose.innerText = `${machineNumber}`;
});
