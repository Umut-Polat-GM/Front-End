const tab = document.querySelector(".tabs"),
    badges = document.querySelectorAll(".tab"),
    icons = document.querySelectorAll(".icon span"),
    { scrollWidth, clientWidth } = tab;

badges.forEach((badge) => {
    badge.addEventListener("click", () => {
        tab.querySelector(".active").classList.remove("active");
        badge.classList.add("active");

        badge.scrollIntoView({
            inline: "center",
        });
    });
});

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        tab.style = "";
        tab.scrollLeft += icon.classList.contains("right-arrow") ? 300 : -300;
        console.log(icon.classList.contains("right-arrow"));
    });
});

tab.addEventListener("scroll", (e) => {
    updateIcons(e.target.scrollLeft);
});

tab.addEventListener("wheel", (e) => {
    tab.style.scrllBehavior = "auto";
    tab.scrollLeft += e.deltaY;
});

function updateIcons(scrolled_width) {
    icons[0].parentElement.classList.toggle("hide", scrolled_width <= 1);
    icons[1].parentElement.classList.toggle(
        "hide",
        scrollWidth - (clientWidth + scrolled_width) <= 1
    );
}
