let menuOpen = false;

function toggleMenu() {
    const menu = document.querySelector("#dropdown");
    const icon = document.querySelector("#hamburger");
    //menu.classList.remove("hidden");
    if (menuOpen === false) {
        menuOpen = true;
        menu.classList.remove("hidden-menu");
        menu.classList.add("show-menu");
    } else {
        menuOpen = false
        menu.classList.add("hidden-menu");
        menu.classList.remove("show-menu");
    }
    console.log(menuOpen)
}