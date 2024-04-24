$(document).ready(function() {
    // Track mouse movement
    $(document).on('mousemove', function(e) {
      $('.custom-cursor').css({
        left: e.pageX,
        top: e.pageY
      });
    });
  
    // Show custom cursor
    $(document).on('mouseenter', 'button', function() {
      $('.custom-cursor').show();
    });
  
    // Hide custom cursor
    $(document).on('mouseleave', 'button', function() {
      $('.custom-cursor').hide();
    });
  
    // Add custom shape to cursor
    $('.custom-cursor').addClass('custom-shape');
  });
  