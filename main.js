// 1. ON CIBLE : On demande au JS de trouver les éléments sur la page

const allbuttons = document.querySelectorAll(".product button");
const cartCount = document.querySelector(".cart-count");

// 2. ON INITIALISE : On crée une variable pour stocker le nombre d'articles

let totalArticles = 0;

// 3. ON AGIT : On ajoute un écouteur d'événement à chaque bouton pour détecter les clics

allbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    // A. On augmante le nombre total d'articles
    totalArticles = totalArticles + 1;

    // B. On met à jour le texte dans le badge rouge
    cartCount.textContent = totalArticles;

    // C. On rend le badge visible (puisqu'il y a maintenant au moins 1 article)

    cartCount.style.display = "block";

    // D. PETIT EFFET VISUEL : Le bouton change de couleur temporairement

    button.innerText = "ADDED ! ✅";
    button.style.backgroundColor = "#4caf50";
    button.style.color = "white";

    // On remet le bouton normal après 1.5 seconde
    setTimeout(() => {
      button.innerText = "ADD TO BAG";
      button.style.backgroundColor = "transparent";
      button.style.color = "black";
    }, 1500);
  });
});

// --- PARTIE SCROLL REVEAL (L'observateur) ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  },
  { threshold: 0.1 },
);

// On observe tous les éléments qui ont la classe "reveal"
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

//1. CIBLAGE (DOM)

const menuBtn = document.querySelector(" .mobile-menu-btn");
const navMenu = document.querySelector(" .nav-menu");

// 2. L'ACTION

menuBtn.addEventListener("click", () => {
  // On ajoute ou on enlève la classe 'active' à chaque clic
  navMenu.classList.toggle("active");

  // PETIT BONUS : Animation des barres du burger (optionnel)
  menuBtn.classList.toggle("open");
});

// COMPTE À REBOUR

// 1. Définir la durée (ex: 3 heures à partir de maintenant)

let time = 3 * 60 * 60; // 3 heures converties en secondes

const timerElement = document.getElementById("timer");

function updateTimer() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  // Ajouter un "0" devant si le chiffre est inférieur à 10 (ex: 09 au lieu de 9)

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Formatage pour afficher toujours 2 chiffres
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
  // Diminuer le temps d'une seconde

  if (time > 0) {
    time--;
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "PROMO TERMINÉE !";
  }
}
// 2. Lancer la fonction toutes les 1 seconde (1000 millisecondes)
setInterval(updateTimer, 1000);
