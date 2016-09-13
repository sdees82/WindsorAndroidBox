$(function(){
  var $headline = $(".headline");
  var $secondheadline = $(".second-headline");
  var $window = $(window);
  var $glyphicon = $(".glyphicon");

//nav
if ($window.width() > 500){
  $("ul").removeClass("navbar-left");
  $("ul").addClass("navbar-right");
  $("ul li").children("a").css("color", "#fff");


};
/*window.onresize = function(){
if ($window.width() > 500){
  $("ul").removeClass("navbar-left");
  $("ul").addClass("navbar-right");
  $("ul li").children("a").css("color", "#fff");


};

};*/


/*****jumbotron*****/

$headline.fadeIn(2000);
$secondheadline.delay(2000).fadeIn(3000);
$glyphicon.delay(4000).fadeIn(3000);



/******about*******/



$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      //smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

/*******products*******/

  /* Every time the window is scrolled ... */
$window.scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({"opacity" : "1"},1500);



        };

    });


});





});
