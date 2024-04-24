import { getProducts, searchProducts } from "./api.js";
import { productCardComponent } from "./card.js";

const productSection = document.querySelector(".card-container");
const quantityOfProducts = document.querySelector('select[name="quantity"]');
const errorBlock = document.querySelector(".error");
const arrayOfProducts = [];

function initSearch(quantity) {
  document.querySelector(".btn-search").addEventListener("click", async () => {
    const keyWords = document.querySelector(".search-input").value;
    const data = await searchProducts(quantity, 1, keyWords);
    const cards = data.products.map((product) => productCardComponent(product));
    productSection.replaceChildren(...cards);

    if (cards.length === 0) {
      errorBlock.style.display = "block";
    } else {
      errorBlock.style.display = "none";
    }
  });
}

async function init() {
  const quantity = quantityOfProducts.value;
  initSearch(quantity);
  const data = await getProducts(quantity);
  const products = data.products;

  const productCards = products.map((product) => productCardComponent(product));

  productSection.innerHTML = "";

  arrayOfProducts.push(...products);

  productSection.replaceChildren(...productCards);

  if (arrayOfProducts.length === 0) {
    errorBlock.style.display = "block";
  } else {
    errorBlock.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", init);

quantityOfProducts.addEventListener("change", init);
