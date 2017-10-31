/**
 * Created by Kevin on 2015-05-08.
 */
window.onload = function (){	
    //NProgress.done() finishes and removes loading bar
    //NProgress.done(); is in onload because onload is when entire page is loaded, including images
    NProgress.done();
    //removes loading spinner
    //setTimeout(function(){$('.spinner').remove();},15250);
	
	//nav toggle
	$(".nav-menu-button-open").on( "click", function(evt) {
		$("body").toggleClass("modal-open");//remove/add body scroll
        $('.nav-menu').toggleClass("nav-menu-open");//open nav-menu
		$('.nav-menu-button-open').toggleClass("active");
	});
	
    //this is a keyboard tab controller. This website takes off focus on buttons, and to help keyboard users, when you tab over a button
    //this will apply the css like of a mouse hover. This will make sure users know they are focused on what button.
    $('body').on('keyup','.button',function(e){
        if ((e.which==9) || (e.keyCode==9)){
            $(document.activeElement).addClass('buttonTabbed');
        }
    });$('body').on('keydown','.button',function(e){
        if ((e.which==9) || (e.keyCode==9)){
            $(document.activeElement).removeClass('buttonTabbed');
        }
    });
	
	$(".fa-search").on("click", function() {
		$(".fa-search-div").toggle( "fold", { direction: "right"  }, 500 );
		
	});
	/*
	//FollowUs dropdown menu keep text white on hover
	$(".dropdown-menu").hover(function() {
		$(".dropdown-toggle").addClass('whiteColor');
	}, function() {
		$(".dropdown-toggle").removeClass('whiteColor');
	});
	
	//Facebook FAN page plugin
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
	*/
};

//init function called for early operations, like starting the page loader
$(document).ready(init);
function init() {
    //NProgress is to start the loading bar and loading spinner
    NProgress.start();
	
    responsive();
}
//window.resize calls responsive function whenever browser is resized
$(window).resize(responsive);
function responsive(){
    width = window.innerWidth;
    height = window.innerHeight;
    //header
	if(width >= 768){
		$('header').css("height", height/2);
	}
	else{
		$('header').css("height", height/5);
	}
	//intro container (index.html only)
	if(width >= 768){
		$('#intro-container').css("height", height/2.37);
	}
	else{
		$('#intro-container').css("height", height/1.38);
	}
	
	//mobile nav menu
	$('.nav-menu').css("height", height*1.5);
	$('.nav-menu').css("width", width);
}
var lastScrollTop = 0;
$(window).scroll(function(evt){
    var st = $(this).scrollTop();
	
    if (st > lastScrollTop){
        /*resize(st);*/
		//$("nav").addClass("desktopDispear");
   }
    else {
        /*resize(st)*/
		//$("nav").removeClass("desktopDispear");
    }
    lastScrollTop = st;
});
function resize(st){
    //this was to change the color in the nav upon a scroll
    var color = 100-st;
    $('.nav-menu-button-open').css("background-image", " -webkit-gradient(linear, 0 "+color+"%, 0 100%, from(#222), to(#4fc7cd))");
    $('.nav-menu-button-open').css("background-image", " -webkit-linear-gradient(#222 "+color+"%, #4fc7cd 100%)");
    $('.nav-menu-button-open').css("background-image", " -moz-linear-gradient(#222 "+color+"%, #4fc7cd 100%)");
    $('.nav-menu-button-open').css("background-image", " -o-linear-gradient(#222 "+color+"%, #4fc7cd 100%)");
    $('.nav-menu-button-open').css("background-image", " linear-gradient(#222 "+color+"%, #4fc7cd 100%)");
    //This was to resize the header upon a scroll
    //var size = ((st/10)*-3)+88;
    //$('header').css("background-size", size+"%");
    //$('header').css("background-position", "0%");
    //if(st == 0)
    //    $('header').css("background-position", "center");
}
