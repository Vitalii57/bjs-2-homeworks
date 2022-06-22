"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let x0;
  let x1;
  let x2;
  let m = [];
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    arr.push(m);
  } else if (D === 0) {
    x0 = -b / (2 * a);
    arr.push(x0);
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x2);
  }
  return arr;
}
console.log(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
