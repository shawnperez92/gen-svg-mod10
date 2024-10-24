const { Circle, Triangle, Square } = require('./shapes');

// Test the render method of each shape, test are now passing

describe('Shape render tests', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon points="150,30 250,170 50,170" fill="red" />');
  });

  test('Square renders correctly', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="50" y="50" width="150" height="150" fill="green" />');
  });
});
