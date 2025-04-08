document.addEventListener('DOMContentLoaded', function() {
    // Simple navigation function
    window.navigateTo = function(page) {
        // Hide all pages
        const pages = document.querySelectorAll('.page-content');
        pages.forEach(page => page.style.display = 'none');
        
        // Show the selected page
        const selectedPage = document.getElementById(page);
        if (selectedPage) {
            selectedPage.style.display = 'block';
        }
        
        // Update active class in navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
        
        // Update URL without reloading the page
        history.pushState(null, null, '#' + page);
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        return false; // Prevent default link behavior
    };
    
    // Handle initial page load
    const hash = window.location.hash.substring(1) || 'home';
    navigateTo(hash);
});



