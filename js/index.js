const navbar = document.querySelector(".head");
let scrollPosition = 0;
let beforeScrollTop = document.documentElement.scrollTop;
    window.addEventListener("scroll", function () {
        scrollPosition= window.scrollY;
        const afterScrollTop = document.documentElement.scrollTop;
        const delta = afterScrollTop - beforeScrollTop;
        if (delta < 0 && scrollPosition) {
            navbar.style.top = "0";
            navbar.classList.add("hover");
        } else if (delta > 0 && scrollPosition > 100) {
            navbar.style.top = "-100%";
        } else if(scrollPosition < 100){
            navbar.classList.remove("hover");
        }
            else {
            return;
        }
        beforeScrollTop = afterScrollTop;
    });

