//Top Menu
$(document).ready(function() {
	$("#topnav li").prepend("<span></span>");
	$("#topnav li").each(function() { 
		var linkText = $(this).find("a").html(); 
		$(this).find("span").show().html(linkText); 
	}); 
	$("#topnav li").hover(function() {
		$(this).find("span").stop().animate({
			marginTop: "-60"
		}, 250);
	} , function() { 
		$(this).find("span").stop().animate({
			marginTop: "0" 
		}, 250);
	});
});


//Slider
function formatText(index, panel) {
  return index + "";
}
$(document).ready(function() {
	$('.anythingSlider').anythingSlider({
		easing: "easeOutExpo",        // Anything other than "linear" or "swing" requires the easing plugin
		autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
		delay: 4000,                    // How long between slide transitions in AutoPlay mode
//		startStopped: true,            // If autoPlay is on, this can force it to start stopped
		animationTime: 800,             // How long the slide transition takes
		hashTags: true,                 // Should links change the hashtag in the URL?
		buildNavigation: true,          // If true, builds and list of anchor links to link to each slide
		pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
//		startText: "Go",             // Start text
//		stopText: "Stop",               // Stop text
		navigationFormatter: formatText       // Details at the top of the file on this use (advanced use)
	});
	
	$("#slide-jump").click(function(){
		$('.anythingSlider').anythingSlider(3);
	});
});


//Scroll Blog Feed
var headline_count;
var headline_interval;
var old_headline = 0;
var current_headline = 0;
$(document).ready(function(){
   headline_count = $("div.headline").size();
   $("div.headline:eq("+current_headline+")").css('top','5px');
 
   headline_interval = setInterval(headline_rotate,3000); //time in milliseconds
   $('#scrollup').hover(function() {
     clearInterval(headline_interval);
   }, function() {
     headline_interval = setInterval(headline_rotate,3000); //time in milliseconds
     headline_rotate();
   });
});
function headline_rotate() {
   current_headline = (old_headline + 1) % headline_count; 
   $("div.headline:eq(" + old_headline + ")").animate({top: -43},"fast", function() {
     $(this).css('top','43px');
   });
   $("div.headline:eq(" + current_headline + ")").show().animate({top: 5},"fast");  
   old_headline = current_headline;
}


//Image caption
$(window).load(function(){
	//for each description div...
	$('div.description').each(function(){
		//...set the opacity to 0...
		$(this).css('opacity', 0);
		//..set width same as the image...
		$(this).css('width', $(this).siblings('img').width());
		//...get the parent (the wrapper) and set it's width same as the image width... '
		$(this).parent().css('width', $(this).siblings('img').width());
		//...set the display to block
		$(this).css('display', 'block');
	});
	
	$('div.wrapper').hover(function(){
		//when mouse hover over the wrapper div
		//get it's children elements with class descriptio
		//and show it using fadeTo
		$(this).children('.description').stop().fadeTo(500, 0.8);
	},function(){
		//when mouse out of the wrapper div
		//use fadeTo to hide the div
		$(this).children('.description').stop().fadeTo(500, 0);
	});
	
		$('div.descriptionSmall').each(function(){
		//...set the opacity to 0...
		$(this).css('opacity', 0);
		//..set width same as the image...
		$(this).css('width', $(this).siblings('img').width());
		//...get the parent (the wrapper) and set it's width same as the image width... '
		$(this).parent().css('width', $(this).siblings('img').width());
		//...set the display to block
		$(this).css('display', 'block');
	});
	
	$('div.wrapperSmall').hover(function(){
		//when mouse hover over the wrapper div
		//get it's children elements with class descriptio
		//and show it using fadeTo
		$(this).children('.descriptionSmall').stop().fadeTo(500, 0.8);
	},function(){
		//when mouse out of the wrapper div
		//use fadeTo to hide the div
		$(this).children('.descriptionSmall').stop().fadeTo(500, 0);
	});

});

//Easy slider
$(document).ready(function(){	
	$("#slider").easySlider({
		speed: 500,
		prevText: 'Prev',
		nextText: 'Next'
		/*
		prevId: 'prevBtn',
		prevText: 'Previous',
		nextId: 'nextBtn',	
		nextText: 'Next',
		controlsShow: true,
		controlsBefore: '',
		controlsAfter: '',	
		controlsFade: true,
		firstId: 'firstBtn',
		firstText: 'First',
		firstShow: false,
		lastId: 'lastBtn',	
		lastText: 'Last',
		lastShow: false,				
		vertical: false,
		speed: 800,
		auto: false,
		pause: 2000,
		continuous: false
		*/
	});
});	

