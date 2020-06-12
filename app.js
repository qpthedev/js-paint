const canvas = document.getElementById("js-canvas");

function onMouseMove(event) {
  console.log(event);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
}
