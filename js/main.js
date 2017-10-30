// Refresh page to top of page
$(document).ready(function() {
  $(this).scrollTop(0);
})
//---------------------------------------------------------------------------------------




//--------------------------------------------------------------------- scrollMenu jQuery
// changing background-color opacity of header
$(document).ready(function() {
  $(window).scroll(function() {
    if ($ (this).scrollTop() > 0) {
      $('.darkHeaderTheme').css('background-color','rgba(0,0,0,0.95)');
      $('.lightHeaderTheme').css('background-color','rgba(255,255,255,0.95)');
    } else {
      $('.darkHeaderTheme').css('background-color','rgba(0,0,0,0.5)');
      $('.lightHeaderTheme').css('background-color','rgba(255,255,255,0.5)');
    }
  })
})
//----------------------------------------------------------------- scrollMenu jQuery END




//----------------------------------------------------------- carousel display javaScript
//carousel image slideshow
var slideIndex = 1;
showImage(slideIndex);
autoShowImage();

// if carousel previous button is present in page, then add click listener
if (document.getElementById("carouselPrev")) {
  document.getElementById("carouselPrev").addEventListener("click", function() {
    plusIndex(-1);
  });
}

// if carousel next button is present in page, then add click listener
if (document.getElementById("carouselNext")) {
  document.getElementById("carouselNext").addEventListener("click", function() {
    plusIndex(+1);
  });
}


// diplay the image by current index
function plusIndex(n) {
  showImage(slideIndex += n);
}

// display image updating index
function showImage(n) {
  var i;
  var x = document.getElementsByClassName("slideImage");
  if (x.length > 0) {
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    }
}

// auto display image updating index at a period of time
function autoShowImage() {
  var i;
  var x = document.getElementsByClassName("slideImage");
  if (x.length > 0) {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(autoShowImage, 8000); // Change image every 8 seconds
  }
}
//------------------------------------------------------- carousel display javaScript END




//------------------------------------------------------------- product filter javaScript
// product selection filter to show all product
filterSelection('all');

// if search button is present in page, then add click listener
if (document.getElementById("searchButton")) {
  document.getElementById("searchButton").addEventListener("click",
  function (clickEvent) {

    //this is to prevent the clickEvent to actually refresh
    clickEvent.preventDefault();
    var inputSearch = document.getElementById("searchInput");
    var inputResult = "";
    var i;
    for (i = 0; i < inputSearch.length ;i++) {
        inputResult += inputSearch.elements[i].value;
    }
    inputResult = inputResult.toLowerCase();
    console.log(inputResult);

    filterSelection(inputResult);
  });
}

filterSelection('all')

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterProduct");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClassFromElement(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClassToElement(x[i], "show");
  }
  console.log("input: " + c);
}

function addClassToElement(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClassFromElement(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
//--------------------------------------------------------- product filter javaScript END
