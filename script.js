$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
    });

    $('.navbar-nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100);
        }
    });
});
