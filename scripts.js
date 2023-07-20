const clickCountElement = document.getElementById('clickCount');
const shoppingCartImageElement=document.getElementById('shopping-cart-image')
// Initialize click count
let clickCount = 0;

// Function to update the click count and display it
function updateClickCount() {
    clickCount++;
    clickCountElement.textContent = clickCount;
    shoppingCartImageElement.src = "/images/Shopping_Cart_fill.svg"
  }