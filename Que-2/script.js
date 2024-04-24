$(window).on('load', function() {
    // Hide the preloader once the page content has loaded
    $(".preloader").fadeOut(10000); // give the duration of loder using number
  });
  $(function() {
    $("#accordion").accordion();
  });