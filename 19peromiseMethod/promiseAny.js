//Promise.any
// In promise.any all the promises run prallelly  and return only fullfilled promise and ignore rejected promise

function api1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("butter naan");
      }, 7000);
    });
  }
  
  function api2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("reject")
      }, 6000);
    });
  }
  
  function api3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("salad");
      }, 5000);
    });
  }
  
  
  
  let x=Promise.any([api1(),api2(),api3()]).then((data)=>{
    console.log(data);
  }).catch((err)=>{
  console.log(err);
  })
  