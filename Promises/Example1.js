//Suppose we are creating an E-Commerce website & we have a cart in it and we have 2 more APIs createOrder(cart); it rturns us a orderId and one more API proceedToPayment(orderId)

const cart =["shoes", "pants", "kurtas"];

//This is how we wrote earlier using Callbacks
createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

//This is how we urite codes using Promise
const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
});
