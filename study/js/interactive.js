const space = document.querySelector("#space");
const article = space.querySelectorAll("article");

for (let el of article) {
  el.addEventlistener("mouseenter", (e) => {
    space.style.animationPlayState = "paused";
  });
  el.addEventlistener("mouseleave", (e) => {
    space.style.animationPlayState = "running";
  });
}
