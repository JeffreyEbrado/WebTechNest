window.addEventListener('load', function () {
    const navType = performance.getEntriesByType("navigation")[0].type;
    
    // Redirect to home on refresh
    if (navType === 'reload') {
        

        window.location.href = '#home';

    }

    // Restore navigation state
    restore();
});

let num = 0;
function navigateTo(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.style.display = 'none');

    // Show selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }

    // Update nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Update URL and scroll to top
    history.pushState(null, null, '#' + page);
    window.scrollTo(0, 0);
    return false;
}

function restore() {
    const hash = window.location.hash.substring(1) || 'home';
    navigateTo(hash);
}

const navType = performance.getEntriesByType("navigation")[0].type;

if (navType === 'navigate') {
  // First visit (not reload, not back/forward)
 location.reload();
}
