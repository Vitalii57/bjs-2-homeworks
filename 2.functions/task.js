// Задание 1
function getArrayParams([...arr]) {
  let min, max, avg;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum += arr[i];
    avg = sum / arr.length;
  }
  let obj = {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2)),
  };
  console.log(obj);
  return obj;
}
getArrayParams([1, 2, 3, -100, 10]);

// Задание 2

function worker(arr) {
  return arr.reduce((acc, arrEl) => {
    return acc + arrEl;
  }, 0);
}

function makeWork(arrOfArr, func) {
  let max = null;
  arrOfArr.forEach((curArr) => {
    const sum = func(curArr);
    if (max === null || sum > max) {
      max = sum;
    }
  });
  return max;
}

const testArr = [
  [0, 0, 0],
  [-1, -100],
];

console.log(makeWork(testArr, worker));

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    }
  }

  let difference = Math.abs(max - min);

  return difference;
}
worker2([10, 10, 11], [20, 10]);
