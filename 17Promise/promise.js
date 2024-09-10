//promises

//return promise Object
//The Promise object represents the eventual completion 
//(or failure) of an asynchronous operation and its resulting value.

function isData(item) {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item) {
        resolve("promise");
      } else {
        reject("data is rejected");
      }
    }, 4000);
  });
  return promise1;
}
let result = isData("rrrfhsdfhs");

// console.log( promise1);

result.then(function success(result) {
  console.log(result);
});

