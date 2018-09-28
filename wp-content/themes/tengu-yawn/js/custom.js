jQuery( document ).ready(function() {
  var threejs = jQuery('#background-animation');
  if(threejs.css('display') == 'none'){
    threejs.fadeIn(2000);
  }
 });


jQuery(window).on("resize orientationchange", function () {
    canvasResize();
});

function canvasResize(){
  var canvas = document.getElementById("ty-canvas");
  var ctx=canvas.getContext("webgl");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerWidth;
}
