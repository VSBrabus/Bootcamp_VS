var cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  var cartItemsList = document.getElementById('cart-items');
  var li = document.createElement('li');
  li.textContent = productName;
  cartItemsList.appendChild(li);
}

function checkout() {
  if (cartItems.length > 0) {
    alert('Checkout complete!');
    cartItems = [];
    document.getElementById('cart-items').innerHTML = '';
  } else {
    alert('Cart is empty!');
  }
}