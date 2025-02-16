//Suppose there are 2 more APIs showOrderSummary(); and updateWalletBalance();
// How we use to write using Callbacks :

const cart = ["shoes", "pants", "kurtas"];

//Consumer
const promise = createOrder(cart); 

promise.then(function(orderId){
    console.log(orderId);
    
    //proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
});

//Producer

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId

        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
           
        }
    });

    return pr;
}

function validateCart(cart){
    return true;
}
