// Refresh page to top of page
$(document).ready(function() {
  $(this).scrollTop(0);
})


// scrollMenu jQuery
// changing background-color opacity of header
$(document).ready(function() {
  $(window).scroll(function() {
    if ($ (this).scrollTop() > 0) {
      $('.darkHeaderTheme').css('background-color','rgba(0,0,0,0.9)');
      $('.lightHeaderTheme').css('background-color','rgba(255,255,255,0.9)');
    } else {
      $('.darkHeaderTheme').css('background-color','rgba(0,0,0,0)');
      $('.lightHeaderTheme').css('background-color','rgba(255,255,255,0)');
    }
  })
})


//carousel image slideshow
var slideIndex = 1;
showImage(slideIndex);

document.getElementById("carouselPrev").addEventListener("click", function() {
  plusIndex(-1);
});

document.getElementById("carouselNext").addEventListener("click", function() {
  plusIndex(+1);
});

function plusIndex(n) {
  showImage(slideIndex += n);
}

function showImage(n) {
    var i;
    var x = document.getElementsByClassName("slideImage");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
