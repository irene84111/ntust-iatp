(function($) {

  $(function() {

    var $window = $(window),
        $body = $('body');

    $('.explore').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
  });
})(jQuery);
