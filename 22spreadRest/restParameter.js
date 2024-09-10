//restParameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:


const nums1 = [1, 2, 3, 4];

function add(...nums) {
  console.log(nums);

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
    // console.log(sum);
  }
  return sum;
}
console.log(add(...nums1));
