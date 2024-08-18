document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    let activeSubmenu = null;  // Variable to keep track of the currently open submenu

    // Toggle the main menu when the hamburger is clicked
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Select all top-level menu items that have a sub-menu
    const menuItemsWithSubmenu = document.querySelectorAll('.menu > li');

    // Add click event listener to each menu item that has a sub-menu
    menuItemsWithSubmenu.forEach(function(menuItem) {
        const submenu = menuItem.querySelector('ul');

        if (submenu) {
            menuItem.addEventListener('click', function(event) {
                // Prevent the event from triggering when clicking on sub-menu items
                event.stopPropagation();

                // If this submenu is already open, close it
                if (submenu === activeSubmenu) {
                    submenu.classList.toggle('open');
                    activeSubmenu = null; // No submenu is active anymore
                } else {
                    // If another submenu is open, close it
                    if (activeSubmenu) {
                        activeSubmenu.classList.remove('open');
                    }
                    // Open the clicked submenu
                    submenu.classList.add('open');
                    activeSubmenu = submenu; // Update the active submenu
                }
            });
        }
    });
});
