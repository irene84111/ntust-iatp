(function($) {

  $(function() {

    var $window = $(window),
        $body = $('body');

    // Disable animations/transitions until the page has loaded

    $(function() {
        $('.explore').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
  });
})(jQuery);
