// Obtenez les éléments nécessaires
var newEmailBtn = document.getElementById("newEmailBtn");
var newEmailModal = document.getElementById("newEmailModal");
var closeBtn = document.getElementsByClassName("close")[0];
var emailList = document.querySelector(".email-list");

// Ouvrez la modal lorsqu'on clique sur le bouton "Nouveau courriel"
newEmailBtn.addEventListener("click", function () {
    newEmailModal.style.display = "block";
});

// Fermez la modal lorsqu'on clique sur le bouton de fermeture
closeBtn.addEventListener("click", function () {
    newEmailModal.style.display = "none";
});

// Fermez la modal lorsqu'on clique en dehors de la modal
window.addEventListener("click", function (event) {
    if (event.target == newEmailModal) {
        newEmailModal.style.display = "none";
    }
});

// Exemple de données d'e-mails (à remplacer par des données réelles)
var emails = [
    {
        sender: "Melvyn • Développeur",
        subject: "N'ouvre pas...",
        preview: "...",
        time: "09:05"
    },
    {
        sender: "Codecademy",
        subject: "Data Scientist: Analytics Project",
        preview: "...",
        time: "06:50"
    },
    // Ajoutez d'autres e-mails ici
];

// Fonction pour afficher les e-mails dans la liste
function displayEmails() {
    emails.forEach(function (email) {
        var emailItem = document.createElement("div");
        emailItem.classList.add("email-item");
        emailItem.innerHTML = `
            <div class="sender">${email.sender}</div>
            <div class="subject">${email.subject}</div>
            <div class="preview">${email.preview}</div>
            <div class="time">${email.time}</div>
        `;
        emailList.appendChild(emailItem);
    });
}

// Affichez les e-mails au chargement de la page
displayEmails();