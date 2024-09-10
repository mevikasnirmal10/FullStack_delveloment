
//closer 

function x() {
  const a=10
  const b=9
  console.log(a);
  function child() {
    console.log(a , b);
  }
   return child
}
const y =x()
console.dir(y);


//closer in setTimeout function

function doSomething() {
  const username='john'

  function callBackFunction() {
    console.log(username);
  }
  setTimeout(callBackFunction,2000) 
}
doSomething()



//
function createOnceFunction() {
  let executed=false;
  return function () {
    if (!executed) {
      console.log("congratulation ! You have called the function");
    }
  }
}

const z =createOnceFunction()