
//spread operator
//spread operator  expands an iterable into more elements.

const num1=[1,2,3,4]
const num2=[5,6,7,8,9]

const muName='Vikas'
const joinArray=[...num1,...num2,...muName]
console.log(joinArray);



const user={
    name:'Vikas',
    age:22
}

const update={...user,city:'Banglore'}
console.log(update);


function add() {
    let sum = 0
    for (let i = 0; i< arguments.length; i++) {
        sum= sum+arguments[i];  
        // console.log(sum);
    }
    return sum
}
console.log(add(joinArray));
  