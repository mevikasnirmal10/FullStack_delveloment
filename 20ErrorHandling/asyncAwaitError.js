
// error handling

//The try statement defines a code block to run (to try).

//The catch statement defines a code block to handle any error.

//The finally statement defines a code block to run regardless of the result.

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
      resolve({ id, item });
    }, 4000);
  });
}

function payment(item, id) {
  return new Promise((resolve, reject) => {
    console.log(`payment starting for ${item} with id no.`, id);
    setTimeout(function timer3() {
      let status = false;
      if (status) {
        resolve(status);
      } else {
        reject(
          new Error(`Payment reject due to some techical Error with status ${status}`)
        );
      }
    }, 6000);
  });
}

async function foodOrder(item) {
  try {
    let res1 = await searchFood(item);
    // console.log(res1);
    let res2 = await orderFood(res1.item);
    let res3 = await payment(res2.item, res2.id);
    console.log("Payment successfull with status", res3);
  } catch (error) {
    console.log(error);
  }
}
foodOrder("Malli Chaap");
