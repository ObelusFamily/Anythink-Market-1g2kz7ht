const { createCanvas, loadImage } = require('canvas')

function getUserAvatar(userName) {
  // Get the first two characters of the username
  const initials = userName.slice(0, 2).toUpperCase();

  // Create a canvas element
  const canvas = createCanvas(100,100);

  // Get the canvas context and set the font
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Arial';

  // Draw a circle with a gradient fill
  const gradient = ctx.createRadialGradient(50, 50, 10, 50, 50, 50);
  gradient.addColorStop(0, '#4285f4');
  gradient.addColorStop(1, '#2c7bfc');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the initials in white
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials, 50, 50);

  // Return the data URL of the canvas as a PNG
  return canvas.toDataURL('image/png');
}

export default getUserAvatar;