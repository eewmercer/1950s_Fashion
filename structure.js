const menLogo = document.getElementById("men-logo");
const womenLogo = document.getElementById("women-logo");

menLogo.addEventListener("click", () => {
    menLogo.style.padding = "10px"
    menLogo.style.margin = "10px"
    menLogo.style.backgroundColor = "#f5a962"
})

womenLogo.addEventListener("click", () => {
    womenLogo.style.padding = "10px"
    womenLogo.style.margin = "10px"
    womenLogo.style.backgroundColor = "#3c7f72"
})