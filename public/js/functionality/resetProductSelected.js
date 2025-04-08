let resetterIntervalIdForProductSelected; // Declare a variable to store the interval ID
let resetterIntervalId; // Declare a variable to store the interval ID


 function publicCheckIfVisibleInProductSelected() {
    const productDiv = document.getElementById('product');

    // Get the computed style of the element
    const style = window.getComputedStyle(productDiv);
    
    // Check if the display property is not 'none'
    if (style.display === 'none') {
    
    // Get the src and alt attributes of the selected productName "PRODUCT NAME"
    document.getElementById('ProductNameSelectedBesideAllProducts').textContent = "";
    document.getElementById('officialProductNameWhenSelected').textContent = "";
    document.getElementById('priceOfSelectedProduct').textContent = "";    
     
    clearInterval(resetterIntervalIdForProductSelected);
    }
}

function checkerAlways(){
    const productDiv = document.getElementById('product');
    
    // Get the computed style of the element
    const styleProductSelected = window.getComputedStyle(productDiv);

    if(styleProductSelected.display === 'none'){
        publicCheckIfVisibleInProductSelected();
    }
}

// Start the interval
resetterIntervalIdForProductSelected = setInterval(publicCheckIfVisibleInProductSelected, 500); // Check every 500ms
resetterIntervalId = setInterval(checkerAlways, 500); // Check every 500ms
