document.addEventListener("DOMContentLoaded", function () {

    const whiteDesignForPcInGcash = document.getElementById('white_below_pc');

    function gcashDesignAdjuster() {
        if (window.innerWidth >= 991) {
            whiteDesignForPcInGcash.style.display = 'none';
        } else {
            whiteDesignForPcInGcash.style.display = 'block';
        }
    }

    // Run once on load
    gcashDesignAdjuster();

    // Run when window resizes
    window.addEventListener('resize', gcashDesignAdjuster);

});
