let mouseMoved = false;
const pointer = {
  x: 0,
  y: 0
};

pointer.x = window.innerWidth * 0.5;
pointer.y = window.innerHeight * 0.5;

const params = {
  pointsNumber: 40,
  widthFactor: 0.3,
  mouseThreshold: 0.6,
  spring: 4,
  friction: 5
};

function updateMousePosition(e) {
  pointer.x = e.x;
  pointer.y = e.y;
}

setupCanvas();
update();
window.addEventListener("resize", setupCanvas);
