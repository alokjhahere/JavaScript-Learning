//Suppose there are 2 more APIs showOrderSummary(); and updateWalletBalance();
// How we use to write using Callbacks :

const cart = ["shoes", "pants", "kurtas"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
});

// This was a Callback Hell. Code was unmaintainable & it grows horizontally that what we call it "Pyramid of Doom"
// Promises helps us avoid this as well and this is handled with Promise Chaining.

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(){
    updateWalletBalance();
});

// Whenever you are attaching a lot of function in the promise chain, we use to pipe the data, we want data to flow in the chain
// for that we always return when we are chaining it.
// By Doing this our code does not grow horizontally but it is in a meaningful chained fashion.

// OR

CreateOrder(cart)
.then((orderId)=> proceedToPayment(orderId))
.then((paymentInfo)=> proceedToPayment(paymentInfo))
.then(()=> proceedToPayment());
