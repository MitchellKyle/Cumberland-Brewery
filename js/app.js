// Toggling Transparency on Navbar

var navIn = $(".navbar-inverse");
var carousel = $('#my-carousel').height();

// Screen sizes <= 767px
if ( $(window).width() <= 767 ) {

	// Solid Navbar background
	navIn.css('background-color', 'rgb(37,48,55)');

} else {

	// Scrolling from top function
	$(window).scroll(function() {

		// Once scroll = 350px Navbar background is solid
		if( $(this).scrollTop() > 350 ) {
		  navIn.css('background-color', 'rgb(37,48,55)');
		} else {

		// If scroll < 350 Navbar background is transparent
		  navIn.css('background-color', 'rgba(37,48,55,0.8)');
		}
	});
}


// Scroll-Spy

$('body').scrollspy({ target: '#scrollspy' })


// Back-to-top

var offset = 900;
var duration = 300;
var top = $('#top');

// Sets the scroll function
$(window).scroll(function() {
 
	if ($(this).scrollTop() > offset) {
		$('.back-to-top').fadeIn(duration);
	} else {
		$('.back-to-top').fadeOut(duration);
	}

});