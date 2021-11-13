const space = document.querySelector(".space");

space.addEventListener("mouseenter", (e) => {
  space.style.borderColor = "royalblue";
});
space.addEventListener("mouseleave", (e) => {
  space.style.borderColor = "plum";
});
