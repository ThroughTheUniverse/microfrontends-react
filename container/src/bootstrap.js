import mountCart from "products/ProductsIndex";
import mountProducts from "cart/CartShow";

const cartElement = document.getElementById("dev-cart");
const productsElement = document.getElementById("dev-products");

mountCart(cartElement);
mountProducts(productsElement);
