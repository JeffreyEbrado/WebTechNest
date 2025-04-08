let interval;

function renderPaypal() {
    // Clear the previous PayPal button if it exists
    const container = document.getElementById('paypal-button-container');
    if (container) {
        container.innerHTML = ''; // Remove previous button
    }

    paypal.Buttons({
        createOrder: function(data, actions) {
            const amount = document.getElementById('amount').value;

            if (!amount || amount <= 0) {
                alert('Please enter a valid donation amount');
                return;
            }

            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amount,
                        currency_code: 'USD'
                    },
                    description: 'Donation'
                }]
            });
        },

        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                const amount = orderData.purchase_units[0].amount.value;
                const transactionId = orderData.purchase_units[0].payments.captures[0].id;

                alert(`Thank you for your donation of $${amount}!\nTransaction ID: ${transactionId}`);
                console.log('Donation completed', orderData);
            });
        },

        onError: function(err) {
            console.error('PayPal error:', err);
            console.log('There was an error processing your donation. Please try again.');
        }
    }).render('#paypal-button-container');
}


//renders the paypal correctly to show it correctly with no errors
function getIdAlways() {
    const DownloadBtn = document.getElementById('buy_directly');

    if (DownloadBtn) {
        DownloadBtn.addEventListener('click', function () {
            renderPaypal();
        });

        clearInterval(interval); // Stop checking once the element is found and listener is added
    }
}

document.addEventListener('DOMContentLoaded', function () {
    interval = setInterval(getIdAlways, 500); // Start checking after DOM is loaded
});
