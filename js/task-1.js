function makeTransaction(quantity, pricePerDroid) {
    const message = `You ordered ${quantity} droids worth ${pricePerDroid} credits!`;
    return message;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(18, 700876540));
console.log(makeTransaction(100500, 7823649739));

