
const navbarList = document.getElementById("navbar__list");


window.addEventListener('load', (event) => {
    buildNav();
});

function buildNav() {

    createNavitem("Home", "active", "navbar__item");
    createNavitem("About", "navbar__item");
    createNavitem("Team", "navbar__item");
    createNavitem("Contact", "navbar__item");


}
function createNavitem(itemName, ...itemClassList) {


    let item = document.createElement("li");
    let itemLink = document.createElement("a");
    itemLink.textContent = itemName;
    itemLink.onclick = () => OnitemClick();
    itemLink.href = `#${itemName}`;

    itemClassList.forEach(classitem => {
        itemLink.classList.add(classitem);
    });
    item.appendChild(itemLink);
    navbarList.appendChild(item);
}
function OnitemClick() {

    let navItems = document.getElementsByClassName("navbar__item");
    let clickeditem = event.srcElement;
    for (item of navItems) {
        item.classList.remove("active");
    }

    clickeditem.classList.toggle("active")

}



