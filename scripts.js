window.addEventListener('scroll', function() {
    const goldenBoxes = document.querySelectorAll('.golden-box');
    let scrollPosition = window.scrollY + window.innerHeight;

    goldenBoxes.forEach(function(box) {
        let boxPosition = box.offsetTop + box.offsetHeight;

        if (scrollPosition > boxPosition) {
            box.style.opacity = 1;
        }
    });
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: 'smooth'
        });
    });
});