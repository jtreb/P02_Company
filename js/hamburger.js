'use strict';

//object.property;
var windowWidth = window.innerWidth;

//style guide side navigation bar
console.log("Window width = " + windowWidth + "px");

var sideNavToggle = document.querySelector("#sideNavToggle");
var sideNavItems = document.querySelector("#sideNavItems");
var sideNavFirstItem = document.querySelector("#sideNavItems a");


// if side navigation toggle is present in page
if (sideNavToggle != null){
  if (windowWidth < 769) {
    console.log("Window width is less than 768px, collapsing side navigation menu");

    sideNavToggle.classList.remove("hidden");
    sideNavItems.classList.add("hidden");

    sideNavToggle.setAttribute("aria-hidden", "false");
    sideNavItems.setAttribute("aria-hidden", "true");
    sideNavItems.setAttribute("aria-labelledby", "sideNavToggle");
  }

  //object.addEventListener(type, argument);
  //argument in this case expects a function to run.
  sideNavToggle.addEventListener("click",
    function () {
      console.log("#sideNavToggle has been clicked.");

      if (sideNavItems.classList.contains("hidden")) {
        console.log("#sideNavItems hidden; showing now");

        sideNavItems.classList.remove("hidden");
        sideNavItems.setAttribute("aria-hidden", "false");
        sideNavToggle.setAttribute("aria-expanded", "true");

        sideNavFirstItem.focus();
      } else {
        console.log("#sideNavItems hidden; hidden now");

        sideNavItems.classList.add("hidden");
        sideNavItems.setAttribute("aria-hidden", "true");
        sideNavToggle.setAttribute("aria-expanded", "false");
      }
    }
  );
}
