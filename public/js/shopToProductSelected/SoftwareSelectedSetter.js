let intervalId; // Declare a variable to store the interval ID

function checkIfVisible() {
    const shopDiv = document.getElementById('shop');

    // Get the computed style of the element
    const style = window.getComputedStyle(shopDiv);

    // Check if the display property is not 'none'
    if (style.display !== 'none') {
        console.log("They Get Shop to Product ID Setter.js");

        for (let i = 0; i <= 5; i++) {
            let productElement = document.getElementById(`productSoftwareName${i}`);

            if (productElement) {
                productElement.addEventListener('click', function () {
                    let productNameText = productElement.textContent;
                    let productPriceText = document.getElementById(`productSoftwarePrice${i}`).textContent;

                    let productImage = document.getElementById(`productSoftwareImage${i}`);
                    let selectedImage = document.getElementById("product-selected-image");

                    console.log(productImage, selectedImage); // Should log the elements if found

                    if (productImage && selectedImage) {
                        let imageSource = productImage.getAttribute("src");
                        let altSource = productImage.getAttribute("alt");

                        selectedImage.setAttribute("src", imageSource);
                        selectedImage.setAttribute("alt", altSource);
                        selectedImage.setAttribute("data-zoom-image", imageSource);

                        document.getElementById('ProductNameSelectedBesideAllProducts').textContent = productNameText;
                        document.getElementById('officialProductNameWhenSelected').textContent = productNameText;
                        document.getElementById('priceOfSelectedProduct').textContent = productPriceText;
                    } else {
                        console.error("One or more elements not found in the DOM.");
                    }
                });
            }
        }

        // Stop the interval once the condition is met
        clearInterval(intervalId);
    }
}

// Start checking visibility every 500ms
intervalId = setInterval(checkIfVisible, 500);
