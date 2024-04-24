import { cartSlider } from "./cart_slider.js";

//ცარიელი მასივი, რომელშიც ვინახავთ დამატებულ პროდუქციას
let arrayOfProducts = [];

export function loadCartItems() {
  const storedProducts = localStorage.getItem("cart");
  if (storedProducts) {
    arrayOfProducts = JSON.parse(storedProducts);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCartItems();
});

export function saveCartItems() {
  localStorage.setItem("cart", JSON.stringify(arrayOfProducts));
}

//შენახული პროდუქტების მასივი
export function getProductArray() {
  return arrayOfProducts;
}

//ფუნქცია, რომელიც ქმნის პროდუქციის ელემენტებს
export function productCardComponent(data) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `
  <div class="slider-container">
  <button class="prev-slide">&lt;</button>
  <button class="next-slide">&gt;</button>
  <div class="slider">
    <div class="slide"><img src=${data.images[0]} alt="Image 1"></div>
    <div class="slide"><img src=${data.images[1]} alt="Image 2"></div>
    <div class="slide"><img src=${data.images[2]} alt="Image 3"></div>
    <div class="slide"><img src=${data.images[3]} alt="Image 3"></div>
  </div>
</div>
<div class="card-info">
  <h2>${data.brand}</h2>
  <p>${data.description}</p>
  <h4>$${data.price.current}</h4>
  <h5 class="added-to-cart">Added To Cart</h5>
  <button class="add-to-cart-btn">Add to Cart</button>
</div>
    `;

  //პროდუქტის ღილაკზე დაჭერისას მასივში ვამატებთ ობიექტებს შემდეგი მონაწემებით
  const addToCartBtn = div.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", () => {
    const product = {
      image: data.images[0],
      name: data.brand,
      title: data.title,
      price: data.price.current,
    };
    arrayOfProducts.push(product);

    saveCartItems();

    //ღილაკზე დაჭერისას 2 წამით აქტიურდება წარწერა და შემდეგ ისევ იშლება
    const addedToCartMessage = div.querySelector(".added-to-cart");
    addedToCartMessage.style.display = "block";

    setTimeout(() => {
      addedToCartMessage.style.display = "none";
    }, 2000);
  });

  //ვიძახებთ პროდუქტის ფოტოების სლაიდერის ფუნქციას
  cartSlider(div.querySelector(".slider"));

  return div;
}
