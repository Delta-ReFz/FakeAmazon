const cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
    }
];

function addToCart(productId) {

    let matchingItem;
  
          //To see if the product is in the cart
          cart.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                  matchingItem = cartItem;
              }
  
          });
  
          //If we did find a matching item we increase the quantity by 1
          if (matchingItem) {
  
              matchingItem.quantity += 1;
          } else {                                            //If we didint find a matching item then just add it to the cart
  
              cart.push({
                  productId: productId,
                  quantity: 1
              });
          }
  };