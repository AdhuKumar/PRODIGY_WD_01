const navbar = document.getElementById('navbar');

window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
};

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#ff6347';
    });

    link.addEventListener('mouseout', function() {
        link.style.color = 'white';
    });
});
