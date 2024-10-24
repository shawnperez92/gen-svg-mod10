class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,30 250,170 50,170" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="150" height="150" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  