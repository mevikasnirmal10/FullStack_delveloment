//promise allSettled
// In promise.allSettled all the promises run prallelly  and return all promise  together it count reject promise also

function api1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("api1");
      }, 8000);
    });
  }
  
  function api2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("api2")
      }, 8000);
    });
  }
  
  function api3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("api3");
      }, 8000);
    });
  }
  
  let x=Promise.allSettled([api1(),api2(),api3()]).then((data)=>{
    console.log(data);
  }).catch((err)=>{
  console.log(err);
  })
  