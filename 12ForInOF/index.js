const obj = {
  name: "Vikas",
  ID: 2345678,
  course: "BCA",
  Hostler: true,
};

for (const key in obj) {   // for in is used for object
  console.log(key);
}

for (const key in obj) {  //
  console.log(obj[key]);
}

let array = [45, 64, 3, 34, 5, 3];

for (const element of array) {  // for of is used for array
  console.log(element);
}

  

// for (let key of Object.values(obj)) {
//   console.log(key);
// }

//spread

let arr1 = [45, 64, 3, 34, 5, 3];
let arr = [1, 2, 3, 4];
let newArr = [...arr1, ...arr];
console.log(newArr);
