const hambMenu = document.getElementById("hamb-menu");
let hambStatus = false; // false sta per 'Menu Chiuso'...

hambMenu.addEventListener("click", () => {
    if(!hambStatus) {
        // Menu Chiuso -> Aperto:
        hambMenu.classList.add("open");
        hambStatus = true;
    } else {
        // Menu Aperto -> Chiuso:
        hambMenu.classList.remove("open");
        hambStatus = false;
    }
});