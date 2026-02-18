const mouseFollower = document.querySelector(".mouse-follower");
const blackDot = document.querySelector(".blackdot");

let x = 0,
  y = 0;
let xdot = 0,
  ydot = 0;
let mousex = 0,
  mousey = 0;

document.addEventListener("mousemove", (e) => {
  mousex = e.pageX;
  mousey = e.pageY;
});

setInterval(() => {
  x += (mousex - x) / 15;
  y += (mousey - y) / 15;

  function far() {
    mouseFollower.style.left = x + "px";
    mouseFollower.style.top = y + "px";

    requestAnimationFrame(far);
  }
  far();
}, 20);

setInterval(() => {
  xdot += (mousex - xdot) / 25;
  ydot += (mousey - ydot) / 25;

  function far() {
    blackDot.style.left = xdot + "px";
    blackDot.style.top = ydot + "px";

    requestAnimationFrame(far);
  }
  far();
}, 20);
