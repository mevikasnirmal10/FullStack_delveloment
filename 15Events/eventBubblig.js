const mainDIV =document.getElementById("mainDiv")
const box =document.getElementById("div1")
console.log(box);

box.addEventListener('click',()=>{
console.log("Box");
})
mainDIV.addEventListener('click',()=>{
console.log(" Main Div");
})
document.body.addEventListener('click',()=>{
console.log("Body");
})
