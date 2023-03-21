// 導覽列往下隱藏 往上顯示&HOVER效果
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

// 菜單點選類別切換

const productType = document.querySelectorAll(".product-sel button");
const productContent = document.querySelectorAll(".product .product-content");

//預設第一個菜單為選取狀態
productType[0].classList.add("product-button-hover");
productContent[0].style.display= "flex";
// 將每個button添加click事件，點選清除選取狀態，並為當前選取類別添加狀態
productType.forEach(type => {
    type.addEventListener("click", () => {
        productType.forEach(type => {
            type.classList.remove("product-button-hover")});
        productContent.forEach(content => {
            content.style.display = "none";
        })
        document.querySelector(".product div." + type.className).style.display = "flex";
        type.classList.add("product-button-hover");
    });
})


