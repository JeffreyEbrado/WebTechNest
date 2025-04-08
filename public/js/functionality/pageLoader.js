function loadContent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.innerHTML += data; // Append content instead of replacing
            } else {
                console.error(`Element with id "${targetId}" not found.`);
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

window.onload = function() {
    // Load static views
    const views = {
        'header': 'resources/views/partials/header.html',
        'footer': 'resources/views/partials/footer.html',
        'head': 'resources/views/head/head.html',
        'home': 'resources/views/home/home.html',
        'shop': 'resources/views/shop/shop.html',
        'events': 'resources/views/auth/events.html',
        'services': 'resources/views/auth/services.html',
        'product': 'resources/views/auth/product-selected.html',
        'conditions': 'resources/views/auth/termsAndConditions.html',
        'about': 'resources/views/auth/about-company.html',
        'contact': 'resources/views/auth/contact.html',
        'login': 'resources/views/auth/sign-in.html',
        //'register': 'resources/views/auth/register.html',
        'cart': 'resources/views/auth/cart.html',
        'templates': 'resources/views/templates/templates.html',
        'selectPayment': 'resources/views/payment/selectPayment.html',
        'gcashPayment': 'resources/views/payment/gcash.html',

        //products
        'allProducts': 'resources/views/products/selection/allProducts.html'
    };



    // Load static views dynamically
    for (const [key, path] of Object.entries(views)) {
        loadContent(path, key);
        console.log(path +"\n"+ key);
    }
//---------------------------------------------------------------------------------------
    // Load product content dynamically into unique divs
    const allProducts = [
        //SOFTWARES
        '1.1PlcEthernetInterface.html',
        '1.2PlcEthernetInterface.html',

        //LIVE WALLPAPERS
        '2.1Sung-Jin-Woo-Fiery.html',
        '2.2Sung-Jin-Woo-Darkness.html',
        '2.3Denji-Chainsaw-Man.html'
    ];

    const container = document.body; // Append elements directly to the body (no extra container)

    allProducts.forEach((product, index) => {
        const productId = `product${index + 1}`;
        
        // Create a new div dynamically
        const singleProductDiv = document.createElement('div');
        singleProductDiv.id = productId;
        singleProductDiv.className = "oe_product g-col-6 g-col-md-3 g-col-lg-3";
        singleProductDiv.style = "--o-wsale-products-grid-product-col-height: 1;";
        singleProductDiv.setAttribute("data-name", "Product");

        // Append the new div to the body
        container.appendChild(singleProductDiv);

        // Load content into the dynamically created div
        loadContent(`resources/views/products/programs/allProductsCombined/${product}`, productId);
    });
    
};



