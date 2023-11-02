document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelector(".plants__list");
    let items = document.querySelectorAll(".plants__card")
    function itemsToggleClass(array, Class, type) {
        if (type === "add") {
            array.forEach(el => el.classList.add(Class))
        } else {
            array.forEach(el => el.classList.remove(Class))
        }
    }
    // function addClassMedia() {
    //     const mediaQuery = window.matchMedia('(max-width: 1024px)')

    //     if (mediaQuery.matches) {
    //         list.classList.remove("plants__list-column");
    //         itemsToggleClass(items, "plants__card-column", "remove")
    //     } else {
    //         list.classList.add("plants__list-column");
    //         itemsToggleClass(items, "plants__card-column", "add")
    //     }
    // }
    // window.addEventListener('resize', addClassMedia, true);
    // addClassMedia();
    list.classList.remove("plants__list-column");
    itemsToggleClass(items, "plants__card-column", "remove")
})