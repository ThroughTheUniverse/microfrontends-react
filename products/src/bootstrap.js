import { faker } from "@faker-js/faker";

const mountProducts = (element) => {
  let products = "";

  for (let i = 0; i != 3; ++i) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("dev-products-isolation");
  if (element) {
    mountProducts(element);
  }
}

export default mountProducts;
