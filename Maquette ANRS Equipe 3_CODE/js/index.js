/*bottom bar active showing script / (try cath block)*/
try {
    const BottomBar = document.querySelector(".HNAZMUL__BOTTOMbAR");
    const bottombarNavItems = BottomBar.querySelectorAll("ul.nav-items li .nav-link");

    const checkNavActiveClass = () => {
        const data = JSON.parse(sessionStorage?.getItem("navbarActiveItem"));
        bottombarNavItems.forEach((item, index) => {
            bottombarNavItems[data?.index]?.classList.add("active");
            if (index !== data?.index) {
                item.classList.remove("active");
            }
        });
    };
    checkNavActiveClass();

    bottombarNavItems.forEach((item, index) => {
        item.onclick = () => {
            sessionStorage.setItem("navbarActiveItem", JSON.stringify({ class: `${bottombarNavItems[index].className}`, index }));
            checkNavActiveClass();
        };
    });

} catch (err) {
    console.log(err);
}


try {
    var swiper = new Swiper(".AccueilPageHeaderSlider", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }); 
} catch (err) {
    console.log(err)
}