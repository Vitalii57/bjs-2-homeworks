function compareArrays(arr1, arr2) {
  let result =
    arr1.length == arr2.length &&
    arr1.every(function (element, index) {
      return element === arr2[index];
    });

  return result; // boolean
}
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));

function advancedFilter([...arr]) {
  let array = arr.filter(function (element) {
    return element > 0 && element % 3 === 0;
  });
  let resultArr = array.map(function (element) {
    return element * 10;
  });
  return resultArr;
}
console.log(advancedFilter([4, 3, 5]));
