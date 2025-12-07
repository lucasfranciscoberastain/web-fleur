// =======================
// POPUP
// =======================
const cards = document.querySelectorAll(".model-card");
const popup = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

const popupImg = document.getElementById("popupImg");
const popupName = document.getElementById("popupName");
const popupDetails = document.getElementById("popupDetails");
const popupContact = document.getElementById("popupContact");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const name = card.dataset.name;
        const age = card.dataset.age;
        const height = card.dataset.height;
        const img = card.dataset.img;

        popupImg.src = img;
        popupName.textContent = name;
        popupDetails.textContent = `${age} años • ${height}m`;

        popupContact.href = `https://wa.me/5493880000000?text=Hola! Me interesa contactar a ${name}`;

        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});


// =======================
// EFECTO DE ENTRADA AL SCROLLEAR
// =======================
function showCardsOnScroll() {
    const trigger = window.innerHeight * 0.90;
    
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showCardsOnScroll);
window.addEventListener("load", showCardsOnScroll);
