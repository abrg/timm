$(function() {
  console.log('got here');
});



// add in google web font
WebFontConfig = {
  google: { families: [ 'Comfortaa::latin', 'Chau+Philomene+One::latin', 'Oleo+Script::latin', 'Anton::latin', 'Homenaje::latin', 'Playball::latin', 'Bangers::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();