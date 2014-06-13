(function() {
  $.fn.spy = function(args) {
    args = $.extend(
      {
        class: 'active',
        scroll: 'none'
      }, args
    );
    var menu = $(this);
    $(window).bind('scroll resize', function() {
      var currentSection;
      $('.section').each(function() {
        var element = $(this).attr('id');
        if ($(window).scrollTop() >= $('#' + element).offset().top - menu.height()) {
          currentSection = element;
        }
        menu.find('a').removeClass(args.class);
        menu.find('a[href=#' + currentSection + ']').addClass(args.class);
      });
    });

    if (args.scroll == 'smooth') {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - menu.height()
            }, 1000);
            return false;
          }
        }
      });
    } else { return false; }
    return this;
  };
})($);
