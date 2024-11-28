// Declare global variables to store selected product and total price
let selectedProduct = null;
let total = 0;

// Function to handle product selection
function selectProduct(name, price, link) {
  selectedProduct = { name, price, link };
  total = price;

  // Update the cart display with selected product information
  document.getElementById('cart-item').textContent = `ទំនិញ៖ ${name}`; // "Item: [product name]"
  document.getElementById('cart-total').textContent = `តម្លៃសរុប៖ $${total}`; // "Total Price: $[price]"

  // Enable the checkout button only if all conditions are met (Game ID & Server ID input)
  toggleCheckoutButton();
}

// Function to check if all conditions are met to enable the checkout button
function toggleCheckoutButton() {
  const gameId = document.getElementById('game-id').value;
  const serverId = document.getElementById('server-id').value;

  // Enable checkout only if a product is selected and both Game ID and Server ID are filled
  const checkoutButton = document.getElementById('checkout-btn');
  if (selectedProduct && gameId && serverId) {
    checkoutButton.disabled = false;
  } else {
    checkoutButton.disabled = true;
  }
}

// Function to initiate the checkout process
function initiateCheckout() {
  const gameId = document.getElementById('game-id').value;
  const serverId = document.getElementById('server-id').value;

  // Check if both Game ID and Server ID are provided
  if (!gameId || !serverId) {
    // If either Game ID or Server ID is missing, show an error message
    document.getElementById('error-message').style.display = 'block'; // Show error message
    return;
  }

  // If valid, hide the error message
  document.getElementById('error-message').style.display = 'none';

  // Construct the message to send to Telegram Bot
  const message = `🕹️ **ព័ត៌មានអំពីការទិញ** 🕹️
  - **ផលិតផល**: ${selectedProduct.name} 
  - **តម្លៃ**: $${selectedProduct.price} 
  - **លេខអ៊ីដីហ្គេម**: ${gameId}
  - **លេខអ៊ីដីម៉ាស៊ីនបម្រើ**: ${serverId}`;

  // Telegram Bot link (replace YOUR_BOT_TOKEN and CHAT_ID with real values)
  const telegramLink = `https://api.telegram.org/bot7813984729:AAHh6u8SG1gcubvMYVSUjzc5xNPqYPaGtoE/sendMessage?chat_id=7834968819&text=${encodeURIComponent(message)}`;

  // Open the Telegram link (send the message)
  window.open(telegramLink, '_blank');
}
