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


//Burger Part in Phone
document.addEventListener('DOMContentLoaded', function() {
  // Get the hamburger button and mobile menu elements
  const hamburgerButton = document.querySelector('[data-bs-toggle="offcanvas"]');
  const mobileMenu = document.getElementById('top_menu_collapse_mobile');
  
  if (hamburgerButton && mobileMenu) {
    // Manual implementation without relying on bootstrap object
    hamburgerButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Toggle the 'show' class on the offcanvas element
      mobileMenu.classList.toggle('show');
      
      // Update aria-expanded attribute
      const isExpanded = mobileMenu.classList.contains('show');
      hamburgerButton.setAttribute('aria-expanded', isExpanded);
      
      // Add backdrop if menu is shown
      if (isExpanded) {
        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'offcanvas-backdrop fade show';
        document.body.appendChild(backdrop);
        document.body.classList.add('overflow-hidden');
        
        // Handle backdrop click to close menu
        backdrop.addEventListener('click', function() {
          closeMenu();
        });
      } else {
        closeMenu();
      }
    });
    
    // Function to close the menu
    function closeMenu() {
      mobileMenu.classList.remove('show');
      hamburgerButton.setAttribute('aria-expanded', 'false');
      
      // Remove backdrop
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.remove();
        document.body.classList.remove('overflow-hidden');
      }
    }
    
    // Fix for close button
    const closeButton = mobileMenu.querySelector('.btn-close');
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        closeMenu();
      });
    }
    
    // Close menu when nav links are clicked
    const mobileNavLinks = mobileMenu.querySelectorAll('a[href]');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
  }
});