'use strict';

//object.property;
var windowWidth = window.innerWidth;


//website pages main navigation bar
var mainNavToggle = document.querySelector("#mainNavToggle");
var mainNavItems = document.querySelector("#mainNavItems");
var mainNavFirstItem = document.querySelector("#mainNavItems a");

if (mainNavToggle != null){
  if (windowWidth < 849) {
    console.log("Window width is less than 849px, collapsing main navigation menu");

    mainNavToggle.classList.remove("hidden");
    mainNavItems.classList.add("hidden");

    mainNavToggle.setAttribute("aria-hidden", "false");
    mainNavItems.setAttribute("aria-hidden", "true");
    mainNavItems.setAttribute("aria-labelledby", "mainNavToggle");
  }

  //object.addEventListener(type, argument);
  //argument in this case expects a function to run.
  mainNavToggle.addEventListener("click",
    function () {
      console.log("#mainNavToggle has been clicked.");

      if (mainNavItems.classList.contains("hidden")) {
        console.log("#mainNavItems hidden; showing now");

        mainNavItems.classList.remove("hidden");
        mainNavItems.setAttribute("aria-hidden", "false");
        mainNavToggle.setAttribute("aria-expanded", "true");

        mainNavFirstItem.focus();
      } else {
        console.log("#mainNavItems hidden; hidden now");

        mainNavItems.classList.add("hidden");
        mainNavItems.setAttribute("aria-hidden", "true");
        mainNavToggle.setAttribute("aria-expanded", "false");
      }
    }
  );
}




//style guide side navigation bar
console.log("Window width = " + windowWidth + "px");

var sideNavToggle = document.querySelector("#sideNavToggle");
var sideNavItems = document.querySelector("#sideNavItems");
var sideNavFirstItem = document.querySelector("#sideNavItems a");


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
