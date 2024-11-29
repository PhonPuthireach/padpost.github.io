let selectedProduct = null;
let total = 0;
let linkUrl = '';
let countdownTimer = null;

function selectProduct(name, price, link) {
  selectedProduct = { name, price, link };
  total = price;
  linkUrl = link;

  document.getElementById('cart-item').textContent = `ទំនិញ៖ ${name}`;
  document.getElementById('cart-total').textContent = `តម្លៃសរុប៖ $${total}`;

  toggleCheckoutButton();
}

function toggleCheckoutButton() {
  const gameId = document.getElementById('game-id').value;
  const serverId = document.getElementById('server-id').value;

  const checkoutButton = document.getElementById('checkout-btn');
  if (selectedProduct && gameId && serverId) {
    checkoutButton.disabled = false;
  } else {
    checkoutButton.disabled = true;
  }
}

function openProductLink() {
  // Open product link
  window.open(linkUrl, '_blank');

  // Show countdown and start 10-second timer
  let countdown = 10;
  document.getElementById('countdown').textContent = `Refreshing in ${countdown} seconds...`;

  countdownTimer = setInterval(function () {
    countdown--;
    document.getElementById('countdown').textContent = `Refreshing in ${countdown} seconds...`;
    if (countdown <= 0) {
      clearInterval(countdownTimer);
      sendPurchaseDetails();
    }
  }, 1000);
}

function sendPurchaseDetails() {
  const gameId = document.getElementById('game-id').value;
  const serverId = document.getElementById('server-id').value;

  if (!gameId || !serverId) {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  document.getElementById('error-message').style.display = 'none';

  // Send purchase details to Telegram
  const message = `
    🕹️ **ព័ត៌មានអំពីការទិញ**
    - **ID Game**: ${gameId}
    - **Server ID**: ${serverId}
    - **ទំនិញ**: ${selectedProduct.name}
    - **តម្លៃ**: $${total}
  `;

  const telegramToken = '7813984729:AAHh6u8SG1gcubvMYVSUjzc5xNPqYPaGtoE';
  const chatId = '7834968819';
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(response => response.json())
    .then(() => {
      alert('Pls Waiting 2-5m!');
      location.reload();
    })
    .catch(() => alert('Error!'));

  // Refresh the page
  setTimeout(() => {
    location.reload();
  }, 10000);
}
