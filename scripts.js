/*
    Filename: scripts.js
    Author: Anonymousssss12345
    Created: 2025-02-27
    Description: Website for OscarCoin, js
    Version: 1.0
    License: MIT License
*/

// When the page is scrolled, check if the golden boxes should show up
window.addEventListener('scroll', function() {
    const goldenBoxes = document.querySelectorAll('.golden-box');
    let scrollPosition = window.scrollY + window.innerHeight;

    goldenBoxes.forEach(function(box) {
        let boxPosition = box.offsetTop + box.offsetHeight;

        // If the box is now fully on screen, make it visible
        if (scrollPosition > boxPosition) {
            box.style.opacity = 1;
        }
    });
});

// When someone clicks a link in the menu, scroll to the right section
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // stop the normal jump

        const target = document.querySelector(this.getAttribute('href'));

        // Move the page to the section, but a little lower (so a header doesn’t cover it)
        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: 'smooth' // make it scroll nicely
        });
    });
});