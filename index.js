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
        
      } if (i===1) {
        return 
        
      } else {
        return sentence+="."
      }
    
  }
}

// standard string append
var str = "";
for (var i = 30000; i > 0; i--) {
	str += "String concatenation. ";
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


