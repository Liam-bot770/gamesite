// Basic example: A game where a player moves a square on a canvas
const gameContainer = document.getElementById("game-container");
const square = document.createElement("div");

square.style.width = "50px";
square.style.height = "50px";
square.style.backgroundColor = "red";
square.style.position = "absolute";
square.style.left = "0px";
square.style.top = "0px";

gameContainer.appendChild(square);

document.addEventListener("keydown", function (event) {
  const style = window.getComputedStyle(square);
  let left = parseInt(style.left);
  let top = parseInt(style.top);

  if (event.key === "ArrowRight") left += 10;
  if (event.key === "ArrowLeft") left -= 10;
  if (event.key === "ArrowDown") top += 10;
  if (event.key === "ArrowUp") top -= 10;

  square.style.left = left + "px";
  square.style.top = top + "px";
});
