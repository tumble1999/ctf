function createNav(a,b){document.querySelector(a).addEventListener("click",function(){document.querySelector(b).classList.toggle("active")})}window.addEventListener("load",function(){createNav(".header_navigation_mobile",".header_navigation")});