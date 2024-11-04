document.addEventListener('mousemove', handleMouse);

const divTag = document.getElementsByTagName('div');
const xPos = document.getElementById('xPos');
const yPos = document.getElementById('yPos');
const tracker = document.getElementById('tracker');

function handleMouse(event) {
  // Update X and Y coordinates inside the div
  xPos.innerHTML = `X: ${event.clientX}`;
  yPos.innerHTML = `Y: ${event.clientY}`;
  
  // Position the div according to the mouse position
  tracker.style.position = 'absolute';
  tracker.style.top = `${event.clientY - 45}px`; // Adjusting to center the div
  tracker.style.left = `${event.clientX - 45}px`;
}
