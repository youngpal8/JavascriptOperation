document.addEventListener("DOMContentLoaded", function() {
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const payPalBtn = document.getElementById("payPalBtn");
    const mySubmit = document.getElementById("mySubmit");
    const subResult = document.getElementById("subResult");
    const paymentResult = document.getElementById("paymentResult");

    const username = "Oreoluwa";

    mySubmit.addEventListener("click", function(event) {
        event.preventDefault();

        if (myCheckBox.checked) {
            subResult.textContent = `You are subscribed`;
        } else {
            subResult.textContent = `You are not subscribed`;
        }

        if (visaBtn.checked) {
            paymentResult.textContent = `Hello ${username}, you are paying with Visa`;
        } else if (masterCardBtn.checked) {
            paymentResult.textContent = `You are paying with MasterCard`;
        } else if (payPalBtn.checked) {
            paymentResult.textContent = `You are paying with PayPal`;
        } else {
            paymentResult.textContent = `You must select a payment option`;
        }
    });
});
