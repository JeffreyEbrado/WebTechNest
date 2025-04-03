// Function to load content into a target container
function loadContent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Load the page content dynamically on page load
window.onload = function() {
    // Load the views
    loadContent('resources/views/partials/header.html', 'header');
    loadContent('resources/views/partials/footer.html', 'footer');

    loadContent('resources/views/head/head.html', 'head');

    // Reload the 'home' content on refresh or page load
    loadContent('resources/views/home/home.html', 'home');

    loadContent('resources/views/shop/shop.html', 'shop');
    loadContent('resources/views/auth/events.html', 'events');
    loadContent('resources/views/auth/services.html', 'services');
    loadContent('resources/views/auth/product-selected.html', 'product');
    loadContent('resources/views/auth/about-company.html', 'about');
    loadContent('resources/views/auth/contact.html', 'contact');
    loadContent('resources/views/auth/sign-in.html', 'login');
    loadContent('resources/views/auth/register.html', 'register');
    loadContent('resources/views/auth/cart.html', 'cart'); // The User Must Be Signed In To Open THIS!


};


