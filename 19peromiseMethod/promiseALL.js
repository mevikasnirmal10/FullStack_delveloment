//promise All

// In promise.all all the promises run prallelly  and return all promise  together if any promise return reject then promise.all return only rejected promise


function api1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("butter naan");
    }, 8000);
  });
}

function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("reject")
    }, 8000);
  });
}

function api3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("salad");
    }, 8000);
  });
}



let x=Promise.all([api1(),api2(),api3()]).then((data)=>{
  console.log(data);
}).catch((err)=>{
console.log(err);
})
