

document.addEventListener("DOMContentLoaded", function () {
    let interval;

    const footer = document.getElementById("footer");
    const downloadBtnID = document.getElementById('buy_directly');
    const selectPaymentID = document.getElementById('selectPayment');

    function toggleFooter() {
        if (window.innerWidth >= 990) {
            if(selectPaymentID.style.display !== 'none'){
                footer.style.display = "none";
            } else {
                footer.style.display = "block";
            }
        } else {
            footer.style.display = "block";
        }
    }

    if (downloadBtnID) {
        downloadBtnID.addEventListener('click', function () {
            toggleFooter();
            console.log("Download Button clicked");
        });
    }
   
    
    // Start interval after DOM and function are ready
    interval = setInterval(toggleFooter, 100);

});
