let products = [];
let totalCost = 0;

function calculateTotalCost() {
  totalCost = 0;
  for (let product of products) {
    totalCost += product.quantity * product.price;
  }
  return totalCost;
}

function displayResults() {
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = `Общая стоимость продуктов: ${totalCost} у.е.`;
}

document.getElementById('addProductButton').addEventListener('click', function() {
  let name = document.getElementById('productName').value;
  let quantity = parseInt(document.getElementById('productQuantity').value);
  let price = parseFloat(document.getElementById('productPrice').value);
  products.push({ name, quantity, price });

  calculateTotalCost();
  displayResults();
});