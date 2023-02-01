import { spline } from "@georgedoescode/spline";
import { createNoise2D } from "simplex-noise";

let header = document.querySelector("header");
let sticky = header.offsetTop;

if (window.location.pathname === "/") {
  window.onscroll = function() {sticker()};
  function sticker() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
  observer.observe(element);
});

const map = (value, start1, stop1, start2, stop2) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

const noise = (x, y) => noise2D(x, y);

const createPoints = () => {
  const points = [];
  // how many points do we need
  const numPoints = 8;
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep;

    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    // store the point's position
    points.push({
      x: x,
      y: y,
      // we need to keep a reference to the point's original point for when we modulate the values later
      originX: x,
      originY: y,
      // more on this in a moment!
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000
    });
  }

  return points;
}

const heroBlob = document.querySelector(".hero-blob path");
const subscribeBlob = document.querySelector(".subscribe-blob path");
const noiseStep = 0.002;
const noise2D = createNoise2D();
const points = createPoints();

(function animate() {
  // for every point
  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    // get the noise value at the point's current position
    const noiseX = noise(point.noiseOffsetX, 0);
    const noiseY = noise(point.noiseOffsetY, 0);

    // map the noise value to our defined range
    const distortionX = map(noiseX, -1, 1, -15, 15);
    const distortionY = map(noiseY, -1, 1, -15, 15);

    // apply distortion to the point
    point.x = point.originX + distortionX;
    point.y = point.originY + distortionY;

    // increment the noise offset
    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  // update the path
  heroBlob.setAttribute("d", spline(points, 1, true));
  subscribeBlob.setAttribute("d", spline(points, 1, true));

  // call this function again on the next frame
  requestAnimationFrame(animate);
})();