// let arr1 = [45, 64, 3, 34, 5, 3];

// for (const element of arr1) {
//     console.log(element);
// }

const obj = {
  name: "Vikas",
  ID: 2345678,
  course: "BCA",
  Hostler: true,
};


// for (const key in obj) {
//     console.log(key+"  "+obj[key]);  
// }

for (const element of Object.values(obj)) {
    console.log(element);
}