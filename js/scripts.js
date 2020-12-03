$(document).ready(function () {
    $('#MyCarousel').carousel({interval:2000});
    $('#carousel-button').click(function () {
        if($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#MyCarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        } else if ($('#carousel-button').children('span').hasClass('fa-play')) {
            $('#MyCarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
        }
    });

    $('.LoginModalToggle').click(function () {
        $('#LoginModal').modal('toggle');
    });

    $('.ReservationModalToggle').click(function () {
        $('#ReservationModal').modal('toggle');
    });
});