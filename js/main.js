//Google Analytics code
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXX-X']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

//mobile navigation
jQuery(document).ready(function(){
	var mobileNavButton = jQuery('.mobile-nav-btn'),
		mobileNav = jQuery('.mobile-nav');

	jQuery('header nav ul:first-child')
		.clone().appendTo(mobileNav)
		.removeClass('hidden-phone')
		.addClass('visible-phone');

	mobileNavButton.click(function(event){
		event.preventDefault();
		mobileNav.slideToggle();
	});
});

//image replacement for retina device
jQuery(document).ready(function(){
	if (window.devicePixelRatio > 1) {
    	var images = jQuery('img');

    	images.each(function(i) {
		    var lowres = jQuery(this).attr('src');
		    var highres = lowres.replace("normal", "retina");
		    jQuery(this).attr('src', highres);
    	});
    }
});


//Initiate gallery
jQuery(document).ready(function(){ 
	var myPhotoSwipe = jQuery("#Gallery a.gallery-item").photoSwipe({ 
		enableMouseWheel: true, 
		enableKeyboard: false 
	}); 
});

//initialize booklet
jQuery(function() {
    jQuery('.book-pages').booklet({
    	width: 894, 
    	height: 609
    });
});


//booklet transform for tablets and mobile
jQuery(document).ready(function(){ 
	var bookDirectory = jQuery('.reviews .open-book');
	bookDirectory.find('ul').first().clone().appendTo(bookDirectory.children('.mobile-book-page'));
});


//scroling 
jQuery(document).ready(function(){
	jQuery('nav ul li a').click(function(){
		var el = jQuery(this).attr('href');
		var elWrapped = jQuery(el);

		scrollToDiv(elWrapped,40);		
		return false;	
	});
	
	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		jQuery('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	}	
});

//back to top button 
jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 200) {
			jQuery('.go-top').fadeIn(300);
		} else {
			jQuery('.go-top').fadeOut(300);
		}
	});

	jQuery('.go-top').click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, 300);
	});
});