//rest operator

//with help of rest operator we can group the remaining values

function sum(...num) {
  console.log(num[0] + num[1] + num[2]);
}

sum(4, 5, 6);

//

let obj = {
  title: "Lecture 30",
  tags: "lect30, rest ,spread",
  description: "hello dosto",
};

let { title, ...remaining } = obj;
console.log(remaining);


//taking object values in form of array
function obj1({title, tags, description}) {
  let newAr = tags.split(",");
  console.log(newAr);
}
obj1(obj)




//spread

let arr =[4,5,67,42,5,334,345]
let arr2=[7,0,6,2,45,456]
let newArray=[...arr]
console.log(newArray);
