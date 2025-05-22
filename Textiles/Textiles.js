function method(countId, resultId, amountId) {
    const quantity = parseInt(document.getElementById(countId).value);
    const priceText = document.getElementById(amountId).innerText;
    const price = parseInt(priceText.replace('₹ ', '')); 

    if (!isNaN(quantity) && quantity > 0 && !isNaN(price)) {
        const total = quantity * price;
        document.getElementById(resultId).innerText = `Total: ₹ ${total}`;
    } else {
        document.getElementById(resultId).innerText = 'Enter valid quantity';
    }
}

function Add(countId, amountId) {
    const quantity = parseInt(document.getElementById(countId).value);
    const priceText = document.getElementById(amountId).innerText;
    const price = parseInt(priceText.replace('₹ ', ''));

    if (!isNaN(quantity) && quantity > 0 && !isNaN(price)) {
        alert(`${quantity} of Shirt (₹${price}) added to cart!`);
    } else {
        alert('Please enter a valid quantity to add to cart.');
    }
}