// ===========================
// BOOK NOW → CONTACT
// ===========================
const bookNowBtn = document.getElementById("bookNowBtn");

if (bookNowBtn) {
    bookNowBtn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            document.getElementById("name").focus();
        }, 600);
    });
}

// ===========================
// HOME CARDS → TOURS SECTION
// ===========================
const homeCards = document.querySelectorAll(".home-card");
const toursSection = document.getElementById("tours");

if (homeCards.length && toursSection) {
    homeCards.forEach(card => {
        card.addEventListener("click", () => {
            toursSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// ===========================
// ABOUT READ MORE
// ===========================
const aboutBtn = document.getElementById("aboutToggleBtn");
const shortText = document.querySelector(".about-text.short");
const fullText = document.querySelector(".about-text.full");
const aboutCard = document.querySelector(".about-card");

if (aboutBtn && shortText && fullText && aboutCard) {
    aboutBtn.addEventListener("click", () => {
        const isExpanded = fullText.classList.contains("show");

        if (!isExpanded) {
            // SHOW FULL TEXT
            shortText.style.display = "none";
            fullText.style.display = "block";

            // allow anim to trig
            requestAnimationFrame(() => {
                fullText.classList.add("show");
            });

            aboutBtn.textContent = "Read Less";

            // highlight card
            aboutCard.classList.add("highlight");

        } else {
            // HIDE FULL TEXT
            fullText.classList.remove("show");

            setTimeout(() => {
                fullText.style.display = "none";
                shortText.style.display = "block";
            }, 400);

            aboutBtn.textContent = "Read More";

            // remove higlt
            aboutCard.classList.remove("highlight");
        }
    });
}
