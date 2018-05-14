var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push(Object.assign({itemName:item, itemPrice:price}))
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var sentence = "In your cart, you have "
    for (var i = 0, l = cart.length; i <l; i++) {
      sentence += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`
      if (cart.length > 1) {
        sentence += ", "
      }
      if (i===cart.length-2) {
         sentence += "and "
      }
      if (cart.length===i && cart.length !== 1) {
         sentence
      }
    }
    return sentence+="."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


