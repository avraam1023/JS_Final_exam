const product_url = "https://api.everrest.educata.dev/shop/products";

export async function getProducts(pageSize = 15, pageIndex = 1) {
  return fetch(
    `${product_url}/all?page_size=${pageSize}&page_index=${pageIndex}`
  ).then((response) => response.json());
}

export async function searchProducts(pageSize = 15, pageIndex = 1, keywords) {
  return fetch(
    `${product_url}/search?page_size=${pageSize}&page_index=${pageIndex}&keywords=${keywords}`
  ).then((response) => response.json());
}
