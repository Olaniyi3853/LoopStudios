const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".open-icon");
const navBar = document.querySelector(".nav-links");


openBtn.addEventListener("click", function(){

    navBar.style.right= "0";

});

closeBtn.addEventListener("click", function(){

    navBar.style.right= "-378px";

});