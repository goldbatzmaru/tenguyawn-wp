jQuery(function() {
  var iframe = jQuery('.ty-default iframe');
  contentResize();
  if(iframe.css('display') == 'none'){
  	iframe.fadeIn(2000);
  }
 });

jQuery( window ).resize(function() {
  contentResize();
});

function contentResize(){
  var iframe = jQuery('.ty-default iframe');
  var siteMain = jQuery('.site-main');
  var content = jQuery('.ty-content');
  var header = jQuery('#wrapper-navbar');
  var windowHeight = jQuery(window).height();
  var headerHeight = jQuery(header).height();
  var contentHeight = windowHeight - headerHeight;
  // content.css('height', contentHeight);
}