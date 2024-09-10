
//reduce

// reduce method reduce the array into a single value

let arr = [3, 6, 23, 57, 86];

const newArr = arr.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);

console.log(newArr);
