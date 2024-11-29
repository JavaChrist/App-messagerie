// Obtenez les éléments nécessaires
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Fonction pour ouvrir le modal
function openModal() {
    console.log("Hamburger clicked");
    modal.classList.add("open");
    console.log("Modal opened");
}

// Fermez le modal lorsqu'on clique sur le bouton de fermeture
closeBtn.addEventListener("click", function () {
    console.log("Close button clicked");
    modal.classList.remove("open");
    console.log("Modal closed");
});

// Fermez le modal lorsqu'on clique en dehors du modal
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        console.log("Clicked outside the modal");
        modal.classList.remove("open");
        console.log("Modal closed");
    }
});