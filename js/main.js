// Refresh page to top of page
$(document).ready(function() {
  $(this).scrollTop(0);
})


// scrollMenu jQuery
// changing background-color opacity of header
$(document).ready(function() {
  $(window).scroll(function() {
    if ($ (this).scrollTop() > 0) {
      $('.darkTheme').css('background-color','rgba(0,0,0,0.9)');
      $('.lightTheme').css('background-color','rgba(255,255,255,0.9)');
    } else {
      $('.darkTheme').css('background-color','rgba(0,0,0,0)');
      $('.lightTheme').css('background-color','rgba(255,255,255,0)');
    }
  })
})
