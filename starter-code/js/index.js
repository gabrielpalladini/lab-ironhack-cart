var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {
  // Iteration 1.1
 
document.querySelector(".btn.btn-success").addEventListener("click", () => {
  let unitPrice = document.querySelectorAll(".pu span");
  let quantity = document.querySelectorAll(".qty input");
  let subTotal = document.querySelectorAll(".subtot span");
  for (let i = 0; i < unitPrice.length; i++) {
    subTotal[i].innerText = Number(unitPrice[i].innerText) * quantity[i].value
  }
})
}

function calculateAll() {
  
}
$calc.onclick = calculateAll;


document.querySelector(".btn.btn-success").addEventListener("click", () => {
  let unitPrice = document.querySelectorAll(".pu span");
  let quantity = document.querySelectorAll(".qty input");
  let subTotal = document.querySelectorAll(".subtot span");
  let totalPrice = 0;
  for (let i = 0; i < unitPrice.length; i++) {
    subTotal[i].innerText = Number(unitPrice[i].innerText) * quantity[i].value
    totalPrice += Number(unitPrice[i].innerText) * quantity[i].value
  }
  document.querySelector("h2 span").innerText = totalPrice 
})

