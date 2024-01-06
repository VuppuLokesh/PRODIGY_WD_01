window.onscroll = function() {
    myFunction();
   };
   
   function myFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       navbar.style.backgroundColor = "blue";
       navbar.style.color = "#fff";
    } else {
       navbar.style.backgroundColor = "#333";
       navbar.style.color = "#fff";
    }
   }