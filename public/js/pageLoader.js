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
        'register': 'resources/views/auth/register.html',
        'cart': 'resources/views/auth/cart.html',
        'templates': 'resources/views/templates/templates.html',

        //products
        'softwares': 'resources/views/products/selection/softwares.html'
    };


//---------------------------------------------------------------------------------------

    // Load static views dynamically
    for (const [key, path] of Object.entries(views)) {
        loadContent(path, key);
    }

    // Load product content dynamically into unique divs
    const products = [
        '1.PlcEthernetInterface.html',
        '2.PlcEthernetInterface.html'
    ];

    const container = document.body; // Append elements directly to the body (no extra container)

    products.forEach((product, index) => {
        const softwareId = `software${index + 1}`;
        
        // Create a new div dynamically
        const softwareDiv = document.createElement('div');
        softwareDiv.id = softwareId;
        softwareDiv.className = "oe_product g-col-6 g-col-md-3 g-col-lg-3";
        softwareDiv.style = "--o-wsale-products-grid-product-col-height: 1;";
        softwareDiv.setAttribute("data-name", "Product");

        // Append the new div to the body
        container.appendChild(softwareDiv);

        // Load content into the dynamically created div
        loadContent(`resources/views/products/programs/softwares/${product}`, softwareId);
    });
};
