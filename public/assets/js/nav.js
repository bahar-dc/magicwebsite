// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }


// Highlight the active menu item based on the current URL
document.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('#cs-navigation .cs-li-link');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');

        // Check if the currentPath matches the href, considering trailing slashes
        if (currentPath === href || currentPath === href + '/') {
            item.classList.add('cs-active');

            // If it's a dropdown link, add the active class to the parent span
            const parentDropdown = item.closest('.cs-dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('span.cs-li-link');
                parentLink.classList.add('cs-active');
            }
        }
    });

    // check dropdown links
    const dropLinks = document.querySelectorAll('#cs-navigation .cs-drop-link');
    dropLinks.forEach(item => {
        const href = item.getAttribute('href');

        if (currentPath === href || currentPath === href + '/') {
            item.classList.add('cs-active');
            const parentDropdown = item.closest('.cs-dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('span.cs-li-link');
                parentLink.classList.add('cs-active');
            }
        }
    });
});
                            