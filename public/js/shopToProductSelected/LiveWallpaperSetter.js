(function () {
    let intervalId;

    function checkIfVisible() {
        const shopDiv = document.getElementById('shop');
        const style = window.getComputedStyle(shopDiv);

        if (style.display !== 'none') {
            console.log("They Get Shop to Product ID Setter.js (Live Wallpaper)");

            for (let i = 0; i <= 5; i++) {
                let productElement = document.getElementById(`productLiveWallpaperName${i}`);
                if (productElement) {
                    productElement.addEventListener('click', function () {
                        let productNameText = productElement.textContent;
                        let productPriceText = document.getElementById(`productLiveWallpaperPrice${i}`).textContent;
                        let productImage = document.getElementById(`productLiveWallpaperImage${i}`);
                        let selectedImage = document.getElementById("product-selected-image");

                        if (productImage && selectedImage) {
                            let imageSource = productImage.getAttribute("src");
                            let altSource = productImage.getAttribute("alt");

                            selectedImage.setAttribute("src", imageSource);
                            selectedImage.setAttribute("alt", altSource);
                            selectedImage.setAttribute("data-zoom-image", imageSource);

                            document.getElementById('ProductNameSelectedBesideAllProducts').textContent = productNameText;
                            document.getElementById('officialProductNameWhenSelected').textContent = productNameText;
                            document.getElementById('priceOfSelectedProduct').textContent = productPriceText;
                        }
                    });
                }
            }

            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(checkIfVisible, 500);
})();
