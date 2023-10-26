function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }

    scrollToTop(600); // Tempo de rolagem em milissegundos (2 segundos)
}

function scrollToTop(duration) {
    const scrollStep = -window.scrollY / (duration / 15);
    
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}




