const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes'); // Import shapes

// Function to generate SVG content
function generateSVG(text, textColor, shapeInstance) {
  const svgWidth = 300;
  const svgHeight = 200;

  // SVG template
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      ${shapeInstance.render()}
      <text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent;
}

// Main function to prompt user and create logo
async function createLogo() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'text', message: 'Enter up to 3 characters of text:', validate: (input) => input.length <= 3 },
    { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hex):' },
    { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hex):' }
  ]);

  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  const svgContent = generateSVG(answers.text, answers.textColor, shape);
  fs.writeFileSync('./examples/logo.svg', svgContent.trim());
  console.log('Generated logo.svg in examples/ folder.');
}

createLogo();
