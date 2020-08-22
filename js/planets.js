class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Planet {
  constructor(position, radius, color, offset, speed) {
    this.originalPosition = this.position = position;
    this.originalRadius = this.radius = radius;
    this.originalColor = this.color = color;
    this.speed = new Vector(0, 0);
    this.destination = new Vector(0, 0);
    this.offset = offset;
    this.destinationTime = speed;
  }
}

var canvas = document.getElementById("planetCanvas");
var context = canvas.getContext("2d");
var mousePosition;

canvas.addEventListener('mousemove', e => {
  mousePosition = new Vector(e.offsetX, e.offsetY);
});

var destinationColor = "#ff0000";
let planets = [];

init();

fitToContainer(canvas);

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function newDestination(planet) {
  planet.destination.x = getRandomInteger(-planet.offset.x + planet.originalPosition.x, planet.offset.x + planet.originalPosition.x);
  planet.destination.y = getRandomInteger(-planet.offset.y + planet.originalPosition.y, planet.offset.y +  planet.originalPosition.y);
  planet.speed.x = (planet.destination.x - planet.position.x) / planet.destinationTime;
  planet.speed.y = (planet.destination.y - planet.position.y) / planet.destinationTime;
}

function init() {
  planets.push(new Planet(new Vector(180, 180), 40, "#0000ff", new Vector(30, 30), 100));
  planets.push(new Planet(new Vector(500, 200), 70, "#FFF000", new Vector(30, 30), 100));
  draw();
  planets.forEach(function(planet) {
    setInterval(function() { newDestination(planet) }, planet.destinationTime);
  });
  setInterval(loop, 10);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function loop() {
  update();
  draw();
}

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}

function mouseHoveringOverPlanet(aMousePosition, planet, index) {
  var dist = distanceBetweenPoints(mousePosition, planet.position);
  console.log("Mouse position: (" + mousePosition.x + "," + mousePosition.y + "), Planet " + index + " position: (" + planet.position.x + "," + planet.position.y + ")");
  if (dist < planet.radius) {
    return true;
  }
  return false;
}

function update() {
  planets.forEach(function(planet, index) {
    planet.position.x += planet.speed.x;
    planet.position.y += planet.speed.y;
    if (mouseHoveringOverPlanet(mousePosition, planet, index)) {
      planet.color = "#000000";
      planet.radius = planet.originalRadius * 1.5;
    } else {
      planet.color = planet.originalColor;
      planet.radius = planet.originalRadius;
    }
  });
}

function drawHollowCircle(aPosition, aRadius, aColor) {
  context.strokeStyle = aColor;
  context.beginPath();
  context.lineWidth = 2;
  context.arc(aPosition.x, aPosition.y, aRadius, 0, Math.PI * 2, true);
  context.closePath();
  context.stroke();
}

function drawSolidRectangle(aPosition, aSize, aColor) {
  context.fillStyle = aColor;
  context.beginPath();
  context.fillRect(aPosition.x, aPosition.y, aSize.x, aSize.y);
  context.closePath();
  context.fill();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  planets.forEach(function(planet) {
    drawHollowCircle(planet.position, planet.radius, planet.color);
    //drawSolidRectangle(planet.destination, new Vector(2, 2), destinationColor);
  });
}