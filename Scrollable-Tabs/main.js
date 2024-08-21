const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");
const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(".scrollable-tabs-container .left-arrow");
const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow");

const removeAllActiveClasses = () => {
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
};

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        removeAllActiveClasses();
        tab.classList.add("active");
    });
});

const manageIcons = () => {
    if (tabsList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
    } else {
        leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

    if (tabsList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else {
        rightArrowContainer.classList.add("active");
    }
};

rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
    manageIcons();
});

leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
    manageIcons();
});

tabsList.addEventListener("scroll", () => {
    manageIcons();
});

let dragging = false;

tabsList.addEventListener("mousedown", (e) => {
    dragging = true;
    tabsList.style.cursor = "grabbing";
    tabsList.style.userSelect = "none";
    tabsList.style.scrollBehavior = "auto";
});

tabsList.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    tabsList.scrollLeft -= e.movementX;
});

document.addEventListener("mouseup", () => {
    dragging = false;
    tabsList.style.cursor = "grab";
    tabsList.style.userSelect = "auto";
    tabsList.style.scrollBehavior = "smooth";
});
