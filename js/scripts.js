let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".colors-bar");
    let getSidebarUl = document.querySelector(".colors-bar ul");
    let getSidebarSpans = document.querySelectorAll(".colors-bar span");


    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "400px";

        let arrayLength = getSidebarSpans.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarSpans[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "0px";
        let arrayLength = getSidebarSpans.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarSpans[i].style.opacity = "0";
        }
        toggleNavStatus = false;
    }
}

let toggleColor = function (color) {
    let getSidebarUl = document.querySelector(".colors-bar ul");
    emptyClassList();
    document.body.classList.toggle(color);
    getSidebarUl.style.visibility = "hidden";
    return toggleNavStatus = false;
}

let emptyClassList = function () {
    let classList = document.body.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    if (name === '1') {
        emptyClassList();
        document.body.classList.toggle("#f1f1f1");
    }
    if (name === '2') {
        emptyClassList();
        document.body.classList.toggle("red");
    }
    if (name === '3') {
        emptyClassList();
        document.body.classList.toggle("orange");
    }
    if (name === '4') {
        emptyClassList();
        document.body.classList.toggle("purple");
    }
    if (name === '5') {
        emptyClassList();
        document.body.classList.toggle("green");
    }
})