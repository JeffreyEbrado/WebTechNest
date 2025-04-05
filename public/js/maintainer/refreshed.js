window.addEventListener('load', function () {
    const navType = performance.getEntriesByType("navigation")[0].type;
    
    // Redirect to home on refresh
    if (navType === 'reload') {
        
        window.location.href = '#home';

        startChecking();
    }

    // Restore navigation state
    restore();
});

function navigateTo(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.style.display = 'none');

    // Show selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }

    // Update nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Update URL and scroll to top
    history.pushState(null, null, '#' + page);
    window.scrollTo(0, 0);
    return false;
}

function restore() {
    const hash = window.location.hash.substring(1) || 'home';
    navigateTo(hash);
}


// Function to reload the PayPal script and the payment process script
function reloadScripts() {
    
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
        render('#paypal-button-container');
    }
}).render('#paypal-button-container');
}

let interval;

function startChecking() {

       const selectPaymentDiv = document.getElementById('selectPayment');

        // Get the computed style of the element
        const style = window.getComputedStyle(selectPaymentDiv);
        
        // Check if the display property is not 'none'
        if (style.display === 'none') {

        console.log("Checking...");
        reloadScripts();

        clearInterval(interval);

    }
      
}

    interval = setInterval(startChecking, 500);// perfect execution is just
  

