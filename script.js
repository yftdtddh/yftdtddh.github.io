//回到顶部
    function showPopup() {
            document.getElementById("popup").style.display = "block";
        }
        
        function hidePopup() {
            document.getElementById("popup").style.display = "none";
        }
        
const backtop = document.querySelector(".backtop");
backtop.style.display = "none";

window.addEventListener('load', function() {
    const height = window.innerHeight;

    window.onscroll = function() {
        if (window.pageYOffset > height) {
            backtop.style.display = "block";
        } else {
            backtop.style.display = "none";
        }
    };

    backtop.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return false;
    };
});


 