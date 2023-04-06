

//----------- 導覽列往下隱藏 往上顯示&HOVER效果--------------------------
let beforeScrollTop = document.documentElement.scrollTop;
const navbarHide = () => {
    const navbar = document.querySelector(".head");
    let scrollPosition = 0;

    scrollPosition = window.scrollY;
    const afterScrollTop = document.documentElement.scrollTop;
    const delta = afterScrollTop - beforeScrollTop;
    if (delta < 0 && scrollPosition > 100) {
        navbar.style.top = "0";
        navbar.classList.add("nav-hover");
    } else if (delta > 0 && scrollPosition > 100) {
        navbar.style.top = "-100%";
    } else if (scrollPosition < 100) {
        navbar.classList.remove("nav-hover");
    }
    else {
        return;
    }
    beforeScrollTop = afterScrollTop;
}


window.addEventListener("scroll", navbarHide);

// --------------------導覽列 RWD---------------------------------

    let ham = document.querySelector(".head .ham");
    let li_decs = document.querySelectorAll(".nav li:not(:last-child)::after")
    ham.addEventListener("click",(e)=>{
        e.preventDefault();
        ham.previousElementSibling.classList.toggle("click");
        ham.children[0].classList.toggle("click");
        ham.children[1].classList.toggle("click");
        ham.children[2].classList.toggle("click");

})
window.addEventListener("scroll",{})

// ------------------------輪播-----------------------------------



    
    let slideImgsCount = $('.scroll-item img').length;
    let currentIndex = 0;
    
    $('.scroll-item').eq(currentIndex).fadeIn();

    let slideInterval = setInterval(showNextSlide, 5000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        $('.scroll-item').eq(currentIndex).fadeOut();
        $('.scroll-item').eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
    
   
    slideButtons = document.querySelectorAll("#navigate a");
    slideButtonArray = [];

    slideButtons.forEach(button => {
        slideButtonArray.push(button);
        button.addEventListener("click", function(e){
            e.preventDefault();
            clearInterval(slideInterval);
            
            
            $('.scroll-item').fadeOut();
            currentIndex = slideButtonArray.indexOf(button);
            $('.scroll-item').eq(currentIndex).fadeIn();

            slideInterval = setInterval(showNextSlide, 5000);;
        })
    })


// ----------------菜單點選類別切換-------------------------------

const productTypes = document.querySelectorAll(".product-sel button");
const productContents = document.querySelectorAll(".product .product-content");



// 將每個button添加click事件，點選清除選取狀態，並為當前選取類別添加狀態
productTypes.forEach(type => {
    type.addEventListener("click", () => {
        productTypes.forEach(type => {
            type.classList.remove("product-button-hover")
        });
        productContents.forEach(content => {
            content.style.display = "none";
        })
        document.querySelector(".product div." + type.className).style.display = "flex";
        type.classList.add("product-button-hover");
    });
})


// -------------訂位日曆載入---------------------------------------------

let d = new Date();
let month = d.getMonth();
let date = d.getDate();
let day = d.getDay();





// -----------------FAQ 常見問題-------------------------------
let qandas = document.querySelectorAll(".qanda-content");
let questions = document.querySelectorAll(".qanda-content .question");

questions.forEach(question => {
    let expand = question.lastElementChild;
    question.addEventListener("click", () => {

        // 如果answer是關閉的才執行
        if (question.parentNode.classList.contains("qanda-close")) {
            qandas.forEach(qanda => {

                // 先把其他打開的關閉，然後把加號轉回來
                if (!qanda.classList.contains("qanda-close")) {
                    qanda.classList.add("qanda-close");
                    qanda.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
                    qanda.firstElementChild.lastElementChild.firstChild.src = "img/qandamore.svg"
                }
                // 把加號轉成減號
                expand.style.transform = "rotate(180deg)";
                expand.firstChild.src = "img/qandaless.svg"
            });
        }
        //如果answer是打開的,要把加號轉回來
        if (!question.parentNode.classList.contains("qanda-close")) {
            expand.style.transform = "rotate(0deg)";
            expand.firstChild.src = "img/qandamore.svg"
        }
        //切換開關模式
        question.parentNode.classList.toggle("qanda-close");


    })
})