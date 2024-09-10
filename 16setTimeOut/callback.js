
//callback 

//callback is just passing a function into another function as an argument

function hello(text,para) {
  console.log("inside heelo");
  // console.log(para);
  para(text);
}

// function cb() {
//   console.log("inside callback");
// }
hello("Hello",function cb(data){
    console.log("Inside callback",data);
})

