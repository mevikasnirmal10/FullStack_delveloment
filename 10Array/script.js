
//array is a special variable, which can hold more than one value

let arr=[1,2,3,4,5,6]
//push
arr.push(2,3,4)
arr.push([2,3,4])
//pop
arr.pop()
//concat
let newArr=arr.concat(45,56,58)
console.log(newArr);
//join
console.log(arr.join("*"));
//reverse
console.log(arr.reverse());
//lenght
console.log(arr.length);
//shift
console.log(arr.shift(),arr);
//unshift
console.log(arr.unshift(3,45),arr);
//slice
console.log(arr.splice(1,4));
//splice
console.log(arr.splice(1,4));


let arr1 =[45,64,3,34,5,3]


for (let index = 0; index < arr1.length; index++) {
    console.log(arr[index]);      
}

