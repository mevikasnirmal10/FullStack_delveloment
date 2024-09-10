//events

const btn = document.getElementById("btn");
const body = document.querySelector("body");
btn.onclick=()=>{
    console.log("Hello from js file");
}

btn.onclick=()=>{
    console.log("Hello from js file1");
}

btn.addEventListener('dblclick',(eventObject)=>{
     body.style.backgroundColor="pink";
    console.log(eventObject.target.type);
    console.log("Hello from js file1");
})
btn.addEventListener('click',(e)=>{

})

const isChange =confirm("color change")
if (isChange) {
const changeColor=prompt("which color")
console.log(changeColor);
body.style.backgroundColor=`${changeColor}`
}

const submit = document.getElementById("submit");
const colorName = document.getElementById("colorName")
let p = document.createElement("p")


colorName.addEventListener('input' , (e) => {
    e.preventDefault();
    // console.log(e)
    // body.style.backgroundColor = `${colorName.value}`
    // console.log(colorName.value)
  
    p.innerText = colorName.value
    document.body.appendChild(p)
})