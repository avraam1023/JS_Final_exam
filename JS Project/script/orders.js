import { getProductArray, saveCartItems } from "./card.js";

//დოკუმენტს ვუსმენთ და ვახორციელებთ შემდეგ ფუნქციებს
document.addEventListener("DOMContentLoaded", () => {
  const arrayOfProducts = getProductArray();
  const orderResult = document.querySelector(".order");

  //ფუნქცია, რომელიც მიწოდებული მასივით ქმნის DOM-ის ელემენტებს
  function initOrder(arrayOfProducts) {
    arrayOfProducts.forEach((order, index) => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
              <div class="image-box">
                  <img src="${order.image}" alt="" />
                </div>
                <div class="description">
                  <h3>${order.name}</h3>
                  <h4>${order.title}</h4>
                  <h4>$${order.price}</h4>
                  <button class="delete-btn">Delete</button>
                </div>
              `;

      //წაშლის ღილაკზე დაჭერისას ვშლით მონაცემებს მასივიდან
      div.querySelector(".delete-btn").addEventListener("click", () => {
        arrayOfProducts.splice(index, 1);

        saveCartItems();

        div.remove();

        orderQuantity(arrayOfProducts);

        updateTotalAmount(arrayOfProducts);
      });

      orderResult.appendChild(div);
    });
  }

  orderQuantity(arrayOfProducts);
  updateTotalAmount(arrayOfProducts);
  initOrder(arrayOfProducts);
});

//შერჩეული პროდუქციის რაოდენობის ფუნქცია
function orderQuantity(array) {
  const quantity = document.querySelector(".quantity-of-product");
  const cart_quant = document.querySelector(".cart-quant");

  cart_quant.textContent = array.length;
  quantity.innerHTML = array.length;
}

//ფუნქცია, რომელიც თვლის პროდუქციის ფასის ჯამს
function updateTotalAmount(array) {
  const amount = document.querySelector(".amount");
  const totalAmount = array.reduce((acc, curr) => acc + curr.price, 0);
  amount.textContent = `$${totalAmount.toFixed(2)}`;
}
