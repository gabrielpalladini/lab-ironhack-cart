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

function addProduct () {
  document.getElementById("create").addEventListener("click", () => {
    let productName = document.querySelector(".new input")[0].value;
    let productPrice = document.querySelector(".new input")[1].value 
  })
  let newProduct = document.createElement("div");
  newProduct.innerText = "This works";
  let parentElement = document.querySelector("tbody");
  parentElement.appendChild(newProduct)
}

document.getElementById("create").addEventListener("click", () => {
  let productName = document.querySelector(".new input")[0];
  let productPrice = document.querySelector(".new input")[1]; 

 let newProduct = document.createElement("div");
newProduct.innerHTML = `<p> ${productName} </p>`

/* `<tr class="product">
<td class="name">
  <div>
  <span>${productName.value}</span>
  </div>
</td>

<td class="pu">
  <div>
  $<span>${productPrice.value}</span>
  </div>
</td>

<td class="qty">
  <div>
    <label>
    <input type="number" value="0" min="0">
  </label>
</div>
</td>

<td class="subtot">
  <div>
  $<span>0</span>
  </div>
</td>

<td class="rm">
  <div>
  <button class="btn btn-delete">Delete</button>
  </div>
</td>

</tr>`*/;

let parentElement = document.querySelector("tbody");
parentElement.appendChild(newProduct)

})

/* <div>
      <tr class="product">
        <td class="name">
          <div>
          <span>IronBubble-head</span>
          </div>
        </td>
    
        <td class="pu">
          <div>
          $<span>25.00</span>
          </div>
        </td>
    
        <td class="qty">
          <div>
            <label>
            <input type="number" value="0" min="0">
          </label>
        </div>
        </td>
    
        <td class="subtot">
          <div>
          $<span>0</span>
          </div>
        </td>
    
        <td class="rm">
          <div>
          <button class="btn btn-delete">Delete</button>
          </div>
        </td>
        
      </tr>
      </div> */