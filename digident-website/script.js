(function () {
  'use strict';
  let mainNav = document.getElementById("main-nav");
  let prevPos = window.pageYOffset;
  window.addEventListener('scroll', ()=>{
    let currPos =  window.pageYOffset;
    if(currPos > prevPos){
      mainNav.style.top="-30%";
      //console.log("scrolled down");
    }
    else{
      mainNav.style.top="0";//console.log("scrolled up");
    }
    prevPos = currPos;
  });
})();