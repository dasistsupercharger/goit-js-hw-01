function getShippingMessage(country, price, deliveryFee) {
    const message = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
    return message;
}
console.log(getShippingMessage("Ukraine", 1000, 50));
console.log(getShippingMessage("USA", 3500, 179));
console.log(getShippingMessage("Sweden", 2799, 353));
