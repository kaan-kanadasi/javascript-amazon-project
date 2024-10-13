// export allows the variables to be used outside of cart.js
// This approach helps avoid polluting the global namespace, which can lead to conflicts and harder-to-maintain code
export const cart = [];

export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
  
    if(matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
  }