jQuery( document ).ready(function() {
  var threejs = jQuery('#background-animation');
  if(threejs.css('display') == 'none'){
  	threejs.fadeIn(2000);
  }
 });


// jQuery(window).on("resize orientationchange", function () {
//     iframeResize();
// });

// function iframeResize(){

//   var iframe = jQuery('#ty-iframe');
//   var iframeCanvas = document.getElementById("ty-iframe").contentWindow.document.getElementById("ty-canvas");
//     if(iframeCanvas){
// 		console.log('iframeCanvas.style.height BEFORE: ' + iframeCanvas.style.height);
//     }

//   var header = jQuery('#wrapper-navbar');
//   if(isMobile()){
// 	var screenHeight = jQuery.mobile.getScreenHeight();
//     var headerHeight = jQuery(header).outerHeight();
//     var iframeHeight = screenHeight - headerHeight;
//   } else {
// 	var windowHeight = jQuery(window).height();
//     var headerHeight = jQuery(header).height();
// 	var iframeHeight = windowHeight - headerHeight;
//   }
//     iframe.css('height', iframeHeight - 2);
//     if(iframeCanvas){
// 	  iframeCanvas.style.height = iframeHeight - 1;
//     }
// }


// function isMobile(){
// if( navigator.userAgent.match(/Android/i)
//  || navigator.userAgent.match(/webOS/i)
//  || navigator.userAgent.match(/iPhone/i)
//  || navigator.userAgent.match(/iPad/i)
//  || navigator.userAgent.match(/iPod/i)
//  || navigator.userAgent.match(/BlackBerry/i)
//  || navigator.userAgent.match(/Windows Phone/i)) {
// 	  return true;
// 	 } else {
// 		 return false;
// 	 }
// }