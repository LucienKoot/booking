// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */
function placeOrder() {
    // get form values
    var numPers = document.getElementById("numPers").value;
    var nachten = document.getElementById("nachten").value;
    var ontbijt = document.getElementById("ontbijt").value;

    // get the price
    var orderPrice = calculatePrice(numPers, nachten);

    // get the delivery price
    var ontbijt = ontbijt(orderPrice, ontbijt);

    // create the output
    var theOutput = "<p>Bedankt voor uw boeking.</p>";

    // todo: output the delivery price, if there is one

    theOutput += "<p>Your total is: &euro" + (orderPrice + ontbijt);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * calculates pizza price
 */
function calculatePrice(numPers, nachten) {
    var orderPrice = Number(numPers) * 60;
    var extraCharge = 0;
    
    // todo: calculate extraCharge, if there is one.
    
    orderPrice += extraCharge;
    return orderPrice;
}

/**
 * calculates ontbijt price
 */
function calculateDelivery(orderPrice, deliveryCity) {
    var deliveryPrice = 10;
    
    // todo: ontbijt price, if there is one
    
    return deliveryPrice;
}