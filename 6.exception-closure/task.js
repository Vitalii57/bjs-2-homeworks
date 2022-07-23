// task_1

function parseCount(meaning) {
  let parse = Number.parseInt(meaning);
  if (Number.isNaN(parse)) {
    throw new Error("Невалидное значение");
  }
  return parse;
}

function validateCount(meaning) {
  try {
    return parseCount(meaning);
  } catch (error) {
    return error;
  }
}

// task_2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || c + b < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    const p = this.getPerimeter() / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}
function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch (err) {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
