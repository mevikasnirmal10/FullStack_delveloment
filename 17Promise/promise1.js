//working of burger store
function searchFood(item) {
  return new Promise((resolve, reject) => {
    console.log("searching start for", item, "......");
    setTimeout(function timer1() {
      let data = `list of ${item}`;
      resolve({ item, data });
    }, 3000);
  });
}
function orderFood(item) {
  return new Promise((resolve, reject) => {
    console.log("select", item);
    setTimeout(function timer2() {
      let id = Math.floor(Math.random() * 999999);
      resolve({id,item});
    }, 4000);
  });
}

function payment(item, id) {
  return new Promise((resolve, reject) => {
    console.log(`payment starting for ${item} with id no.`, id);
    setTimeout(function timer3() {
      let status = true;
      resolve(status);
    }, 6000);
  });
}


let resul = searchFood("pizza")
.then(function consume1(item) {
  console.log(item.data);
  return orderFood(item.item)
})
.then(function consume2(details) {
  console.log("order created successFul with id no", details.id);
   return payment(details.item,details.id)
})
.then(function consume3(status) {
  console.log("Payment successful with status", status);

})

//searching start for", pizza, "......"
//list of pizza 
//select pizza
//order created successFul with id no", orderId
//Payment successful with status", status


// let result = searchFood("pizza").then(function consume1(item) {
//   console.log(item.data);
//   orderFood(item.item).then(function consume2(orderId) {
//     console.log("order created successFul with id no", orderId);
//     payment(item.item, orderId).then(function consume3(status) {
//       console.log("Payment successful with status", status);
//     });
//   });
// });
