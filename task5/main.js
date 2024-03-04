function calculate_average_price(products) {
    let total = 0;
    products.forEach(product => {
      total += product.price;
    });
    return total / products.length;
  }
  
  const productList = [];
  
  let numProducts = prompt("Введите количество продуктов:");
  for (let i = 0; i < numProducts; i++) {
    let name = prompt("Введите название продукта " + (i+1) + ":");
    let price = prompt("Введите цену продукта " + (i+1) + ":");
    productList.push({ name: name, price: parseFloat(price) });
  }
  
  let averagePrice = calculate_average_price(productList);
  console.log("Средняя цена товаров: " + averagePrice);
  