var mybutton = index.getElementById("myBtn");
            
window.onscroll = function() {scrollFunction()};
            
    function scrollFunction() {
        if (index.body.scrollTop > 20 || index.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
             mybutton.style.display = "none";
              }
        }
            
        function topFunction() {
            index.body.scrollTop = 0;
            index.documentElement.scrollTop = 0;
        }