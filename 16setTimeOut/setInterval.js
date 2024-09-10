//setInterval

//The setInterval() method calls a function at specified intervals

setInterval(() => {
  console.log("hello");
}, 1000);

//random color generator

const body = document.getElementsByTagName("body");

let colorString = "0123456789abcdef";

function colorChange() {
  let color = "";
  for (let i = 0; i<6; i++) {
    let randNum = Math.floor(Math.random() * colorString.length);
    color = color + colorString[randNum];
    // console.log(color);

  }
  body[0].style.backgroundColor = `#${color}`;
}
setInterval(colorChange, 0);





