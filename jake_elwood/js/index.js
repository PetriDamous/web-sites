const $nav = document.querySelector('.nav');

document.body.addEventListener('click', function(e) {

    if (e.target.id === "open-nav") {
        $nav.classList.add('open-navigation');
        this.style.overflowY = 'hidden';
    }

    if (e.target.id === "close-nav") {
        $nav.classList.remove('open-navigation');
        this.style.overflowY = 'auto';
    }
    
});