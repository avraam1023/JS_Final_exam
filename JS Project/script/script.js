const newProducts = document.querySelector(".new-products");

function newProduct() {
  fetch("https://api.everrest.educata.dev/shop/products/all?page_size=4")
    .then((response) => response.json())
    .then((result) => createDiv(result.products));
}

function createDiv(data) {
  newProducts.innerHTML = "";
  data.forEach((product) => {
    const div = document.createElement("div");
    div.setAttribute("class", "new-product-container");
    div.innerHTML = `
    <img src=${product.images[0]} alt="${product.brand}" style="width:100%">
      <div class="card-container">
        <h3><b>${product.brand}</b></h3> 
        <p>A${product.description}</p> 
      </div>
    `;

    newProducts.appendChild(div);
  });
}

newProduct();

// ვიძახებ api-ს რომელიც მიბრუნებს 4 მონაცემს,და გამომაქვს new product-ის სექციაში
