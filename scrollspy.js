(function() {
  $.fn.spy = function() {
    var menu = $(this);
    $(window).bind('scroll resize', function() {
      var currentSection = null;
      $('.section').each(function() {
        var element = $(this).attr('id');
        if ($(window).scrollTop() >= $('#' + element).offset().top - $('nav').height()) {
          currentSection = element;
        }
        menu.removeClass('active').parent().siblings().find('a[href=#' + currentSection + ']').addClass('active');
      });
    });
  };
})($);
