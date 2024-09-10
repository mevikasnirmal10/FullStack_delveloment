
//fetch api
//The Fetch API provides a JavaScript interface for 
//making HTTP requests and processing the responses.
// async function api() {
//   let response = await fetch("https:/codethreadpracticeapi.vercel.app/");
//   let result = await response.json();
//   console.log(result);
// // }
// api();

async function api(num1,num2) {
  try {
    let response = await fetch(`https://codethreadpracticeapi.vercel.app/sub?a=${num1}&b=${num2}`)
    let result =await response.json();
    document.getElementById("total").innerHTML=result.sub
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  } catch (error) {
    console.log(error);
  }
}


document.getElementById("btn").addEventListener('click',()=>{
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    api(num1,num2)
})
