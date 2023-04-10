

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
ham.addEventListener("click", (e) => {
    e.preventDefault();
    ham.previousElementSibling.classList.toggle("click");
    ham.children[0].classList.toggle("click");
    ham.children[1].classList.toggle("click");
    ham.children[2].classList.toggle("click");

})
window.addEventListener("scroll", {})

// ------------------------INDEX 輪播-----------------------------------




let slideImgsCount = $('.scroll-item img').length;
let currentIndex = 0;

$('.scroll-item').eq(currentIndex).fadeIn();

let slideInterval = setInterval(showNextSlide, 5000);

function showNextSlide() {
    let nextIndex = (currentIndex + 1) % slideImgsCount;
    $('.scroll-item').eq(currentIndex).fadeOut();
    $('.scroll-item').eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
}


slideButtons = document.querySelectorAll("#navigate a");
slideButtonArray = [];

slideButtons.forEach(button => {
    slideButtonArray.push(button);
    button.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(slideInterval);


        $('.scroll-item').fadeOut();
        currentIndex = slideButtonArray.indexOf(button);
        $('.scroll-item').eq(currentIndex).fadeIn();

        slideInterval = setInterval(showNextSlide, 5000);;
    })
})

// -------------------小助手-----------------------------


$(() => {

    let relaxd = ["美式 Americano", "拿鐵 Latte", "卡布奇諾 Cappuccino", "白咖啡 Flat White", "摩卡 Mocha", "草莓奶昔 Strawberry smoothie", "草莓冰茶 Strawberry iced tea", "伯爵紅茶 Earl gray tea", "茉莉綠茶 Jasmine green tea", "香蕉果昔 Banana Smoothie", "莓果果昔 Mixed berry Smoothie"];
    let relaxf = ["草莓奶霜吐司 Cream strawberry bread", "雙雞酪梨三明治 Double chicken avocado sandwich", "經典牛肉起司三明治 Classic beef sandwich", "煙燻豬里肌帕尼尼 Smoked pork panino", "菠菜鮭魚法式鹹派 Salmon & Spinach Quiche", "馬鈴薯沙拉捲餅 Potato salad burrito"];

    let happyd = ["美式 Americano", "拿鐵 Latte", "卡布奇諾 Cappuccino", "白咖啡 Flat White", "摩卡 Mocha", "冷萃 Cold Brew", "草莓奶昔 Strawberry smoothie", "草莓冰茶 Strawberry iced tea", "錫蘭紅茶 Ceylon black tea", "伯爵紅茶 Earl gray tea", "高山烏龍 High mountain oolong", "茉莉綠茶 Jasmine green tea", "香蕉果昔 Banana Smoothie", "莓果果昔 Mixed berry Smoothie"]
    let happyf = ["草莓奶霜吐司 Cream strawberry bread", "雙雞酪梨三明治 Double chicken avocado sandwich", "經典牛肉起司三明治 Classic beef sandwich", "煙燻豬里肌帕尼尼 Smoked pork panino", "菠菜鮭魚法式鹹派 Salmon & Spinach Quiche", "馬鈴薯沙拉捲餅 Potato salad burrito"
    ]

    let healthd = ["濃縮 Espresso", "美式 Americano", "拿鐵 Latte", "冷萃 Cold Brew", "錫蘭紅茶 Ceylon black tea", "伯爵紅茶 Earl gray tea", "高山烏龍 High mountain oolong", "茉莉綠茶 Jasmine green tea", "香蕉果昔 Banana Smoothie", "莓果果昔 Mixed berry Smoothie"]
    let healthf = ["雙雞酪梨三明治 Double chicken avocado sandwich", "經典牛肉起司三明治 Classic beef sandwich", "馬鈴薯沙拉捲餅 Potato salad burrito",]

    let energyd = ["濃縮 Espresso", "美式 Americano", "拿鐵 Latte", "卡布奇諾 Cappuccino", "白咖啡 Flat White", "摩卡 Mocha", "冷萃 Cold Brew", "錫蘭紅茶 Ceylon black tea", "伯爵紅茶 Earl gray tea", "高山烏龍 High mountain oolong", "茉莉綠茶 Jasmine green tea", "莓果果昔 Mixed berry Smoothie"]

    let energyf = ["草莓奶霜吐司 Cream strawberry bread", "雙雞酪梨三明治 Double chicken avocado sandwich", "經典牛肉起司三明治 Classic beef sandwich", "煙燻豬里肌帕尼尼 Smoked pork panino", "菠菜鮭魚法式鹹派 Salmon & Spinach Quiche", "馬鈴薯沙拉捲餅 Potato salad burrito"
    ]

    let dessert = ["雙層草莓蛋糕 Double strawberry", "草莓馬卡龍 Strawberry macaron", "三重巧克力蛋糕 Triple chocolate", "可麗露 Canele", "藍莓派 Blueberry pie", "肉桂捲 Cinnamon roll", "提拉米蘇 Tiramisu"]

    $(".suginput").submit((e) => {
        $(".chat-res").css({ display: "block" });
        e.preventDefault();

        document.querySelector(".chat-res p").innerHTML = "";
        let feel = $(".sug input[name = 'feel']:checked").attr("value");
        let time = $(".sug input[name = 'time']:checked").attr("value");
        let lunch = "";
        if (time === "中午") {
            lunch = ", 或許再來個\"" + dessert[parseInt(Math.random() * dessert.length)].split(" ", 1) + "\""
        }
        let mood = "";
        let drink = "";
        if (feel === "放鬆") {
            mood = "達到身心的放鬆。"
            drink = relaxd[parseInt(Math.random() * relaxd.length)]
            food = relaxf[parseInt(Math.random() * relaxf.length)]
        } else if (feel === "愉悅") {
            mood = "感到愉快。"
            drink = happyd[parseInt(Math.random() * happyd.length)]
            food = happyf[parseInt(Math.random() * happyf.length)]
        } else if (feel === "健康") {
            mood = "健康又無負擔!"
            lunch = ""
            drink = healthd[parseInt(Math.random() * healthd.length)]
            food = healthf[parseInt(Math.random() * healthf.length)]
        } else if (feel === "活力") {
            mood = "充滿活力!"
            drink = energyd[parseInt(Math.random() * energyd.length)]
            food = energyf[parseInt(Math.random() * energyf.length)]
        }

        $(".chat-res").css({ display: "block" });


        text = "歡迎光臨DuoChill Cafe! 如果您在今天" + time + "想要來點" + feel + ", 推薦您可以來杯\"" + drink.split(" ", 1) + "\", 加上一份\"" + food.split(" ", 1) + "\"" + lunch + ", 讓您能夠" + mood;

        let timeOutOut = setTimeout(() => {
            for (let i = 0; i < text.length; i++) {
                let timeOutIn = setTimeout(() => { document.querySelector(".chat-res p").innerHTML += text.charAt(i) }, 50 * i);
                $(".suginput input[type = 'submit']").click((e) => {
                    clearTimeout(timeOutIn);
                })
            }

        }, 1000)


        $(".suginput input[type = 'submit']").click((e) => {
            clearTimeout(timeOutOut);
        })


    })

    $(".sug").click((e) => {
        $(".chat-res").css({ display: "none" });
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

// ----------------品牌故事Story timeline 切換----------------------------------------

let timelinelis = document.querySelectorAll(".timeline li");
timelinelis.forEach(li => {
    li.addEventListener("click", (e) => {
        e.stopPropagation();
        timelinelis.forEach(li => {
            li.querySelector(".time-content").style.display = "none"
        })
        li.querySelector(".time-content").style.display = "flex";
    })
})
document.addEventListener("click", (e) => {

    timelinelis.forEach(li => {
        li.querySelector(".time-content").style.display = "none"
    })
})
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

let faqCols = document.getElementsByClassName("qanda");

let faqPages = document.querySelectorAll(".faq .faq-page button");



faqPages.forEach(button => {
    button.addEventListener("click", function (e) {
        faqPages.forEach(button => { button.classList.remove("faq-click") });
        button.classList.add("faq-click");
        for (i = 0; i < faqCols.length; i++) {
            faqCols[i].style.display = "none";
            if (button.innerHTML - 1 == i) {
                faqCols[i].style.display = "block";
            }
        }

    });

});

// --------------------located 門市資訊地圖-----------------------------------------

let mapAnchors = document.querySelectorAll(".store-intro a");
let mapIframes = document.querySelectorAll(".store-intro a iframe");

mapAnchors.forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.stopPropagation();
        anchor.querySelector("iframe").classList.add("iframeclick");

    })
})

document.addEventListener("click", (e) => {
    mapIframes.forEach(iframe => {
        iframe.classList.remove("iframeclick");
    })

})

// -------------------------登入------------------------------------

let signButtons = document.querySelectorAll(".member .sign > button");
let signForms = document.querySelectorAll(".member form");
signButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        signButtons.forEach(button => { button.classList.add("non-active"); })
        button.classList.remove("non-active");
        signForms.forEach(form => {
            form.style.display = "none";
            if (button.classList.contains(form.classList)) {
                form.style.display = "block"
            }
        })

    })
})

let signUpPages = document.querySelectorAll(".member form.sign-up-form > div");
let signUpPageButton = document.querySelector(".member>div form>button");
let pageClick = 0;
let nextPage = "次頁"
signUpPageButton.addEventListener("click", function (e) {
    pageClick += 1;
    e.preventDefault();
    signUpPages.forEach(page => {
        page.classList.toggle("page-click");
        signUpPageButton.innerHTML = nextPage + "<br>" + ((pageClick) % signUpPages.length + 1) + " / 2";
        if ((pageClick) % signUpPages.length + 1 === 1) {
            nextPage = "次頁"
        } else {
            nextPage = "前頁"
        }
    })


})

let signInForm = signForms[0];
let signUpForm = signForms[1];
let checkText = "";
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formInputs = signInForm.querySelectorAll("input:not([type=submit])")
    let send_data = true;
    let email = signInForm.querySelector(".email");
    let password = signInForm.querySelector(".password");
    
    formInputs.forEach(input => {
        if (input.value === "") {
            input.classList.add("-error");
            send_data = false;
        } else {
            input.classList.remove("-error");
        }
    });
        if(email.value)
    if (!send_data) {
        alert("請再檢查輸入欄位!");
        e.preventDefault();
    }

})

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("e");
    let formInputs = signUpForm.querySelectorAll("input:not([type=submit])")
    let send_data = true;
    formInputs.forEach(input => {
        if (input.value === "") {
            input.classList.add("-error");
            send_data = false;
        } else {
            input.classList.remove("-error");
        }


    })
    if (!send_data) {
        alert("請再檢查輸入欄位!");
        e.preventDefault();
    }

})

