// Implement Filter, ForEach, Map
// using only for(), array and objects (without other js methods)

function filter(arr, callbackFn) {
  // func is a boolean function that returns true (keep element) or false
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const isEven = (num) => num % 2 === 0;

const arr1 = [0, 2, 4, 2, 3, 5];

console.log(filter(arr1, isEven));

// **************

function forEach2(arr, callbackFn) {
  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i]);
  }
}

function printisEven(num) {
  console.log(isEven(num));
}

forEach2(arr1, printisEven);

// ****************

function map(arr, callbackFn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callbackFn(arr[i]));
  }
  return res;
}

const makeEven = (num) => {
  if (!isEven(num)) {
    num++;
  }
  return num;
};

console.log(map(arr1, makeEven));