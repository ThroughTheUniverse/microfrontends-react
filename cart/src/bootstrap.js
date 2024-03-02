const mountCart = (element) => {
  const carText = `<div>You have 2 items in your cart</div>`;
  element.innerHTML = carText;
};

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("dev-cart-isolation");
  if (element) {
    mountCart(element);
  }
}

export default mountCart;
