// ===========================
// TOUR MODAL (button-MORE)
// ===========================

// --- GUARD (ważne dla ES Modules) ---
const modal = document.getElementById("tourModal");

if (!modal) {
    console.warn("Tour modal not found");
    // jeśli modala nie ma w DOM – kończymy plik
} else {

    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".tour-modal-close");

    // ===========================
    // TOUR DATA
    // ===========================
    const tourDetails = {

        "new-zealand": {
            title: "New Zealand",
            image: "assets/img/tours/new-zealand-tour.jpg",
            desc: `
                <p><strong>Discover breathtaking landscapes, crystal-clear lakes and majestic mountains.</strong></p>

                <p>
                    New Zealand offers some of the most scenic views in the world, from alpine peaks
                    to peaceful fjords and wide open valleys.
                </p>

                <p>
                    This tour is ideal for nature lovers and travelers seeking adventure in untouched environments.
                </p>

                <p>
                    <strong>Duration:</strong> 7–10 days<br>
                    <strong>Highlights:</strong> Mountains, lakes, hiking trails
                </p>
            `
        },

        "indonesia": {
            title: "Indonesia",
            image: "assets/img/tours/indonesia-tour.jpg",
            desc: `
                <p><strong>Explore tropical islands with crystal-clear waters and dramatic cliffs.</strong></p>

                <p>
                    Discover vibrant local culture, traditional villages and unforgettable sunsets
                    across Indonesia’s most beautiful destinations.
                </p>

                <p>
                    This tour is perfect for travelers who love nature, relaxation and light adventure.
                </p>

                <p>
                    <strong>Duration:</strong> 5–8 days<br>
                    <strong>Highlights:</strong> Beaches, culture, snorkeling
                </p>
            `
        },

        "argentina": {
            title: "Argentina",
            image: "assets/img/tours/argentina-tour.jpg",
            desc: `
                <p><strong>Experience dramatic landscapes from Patagonia to vibrant Buenos Aires.</strong></p>

                <p>
                    Argentina combines wild nature, glaciers and mountains with rich culture,
                    passionate cities and unforgettable cuisine.
                </p>

                <p>
                    This tour is perfect for travelers who want both adventure and authentic local experiences.
                </p>

                <p>
                    <strong>Duration:</strong> 8–12 days<br>
                    <strong>Highlights:</strong> Glaciers, mountains, cities
                </p>
            `
        },

        "japan": {
            title: "Japan",
            image: "assets/img/tours/japan-tour.jpg",
            desc: `
                <p><strong>A fascinating blend of ancient traditions and modern innovation.</strong></p>

                <p>
                    Explore historic temples, futuristic cities and peaceful landscapes
                    while discovering Japan’s unique culture and cuisine.
                </p>

                <p>
                    This tour offers a perfect balance between tradition, technology and everyday life.
                </p>

                <p>
                    <strong>Duration:</strong> 6–9 days<br>
                    <strong>Highlights:</strong> Temples, cities, cuisine
                </p>
            `
        },

        "norway": {
            title: "Norway",
            image: "assets/img/tours/norway-tour.jpg",
            desc: `
                <p><strong>Witness dramatic fjords, northern lights and untouched nature.</strong></p>

                <p>
                    Norway is famous for its deep fjords, scenic mountains and some of the most
                    breathtaking natural views in Europe.
                </p>

                <p>
                    This tour is ideal for travelers seeking calm landscapes and unforgettable natural phenomena.
                </p>

                <p>
                    <strong>Duration:</strong> 6–8 days<br>
                    <strong>Highlights:</strong> Fjords, northern lights, hiking
                </p>
            `
        },

        "poland": {
            title: "Poland",
            image: "assets/img/tours/poland-tour.jpg",
            desc: `
                <p><strong>Discover historic cities, mountain trails and charming landscapes.</strong></p>

                <p>
                    Poland offers a rich history, beautiful old towns and diverse nature
                    ranging from the Baltic coast to the Tatra Mountains.
                </p>

                <p>
                    This tour is perfect for travelers who enjoy culture, history and peaceful scenery.
                </p>

                <p>
                    <strong>Duration:</strong> 4–7 days<br>
                    <strong>Highlights:</strong> Historic cities, mountains, culture
                </p>
            `
        }
    };

    // ===========================
    // OPEN MODAL (MORE BUTTON)
    // ===========================
    document.querySelectorAll(".tour-more").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation(); // 🔥 ważne przy sliderze

            const card = e.target.closest(".tour-card");
            if (!card) return;

            const key = card.dataset.tour;
            if (!tourDetails[key]) return;

            modalTitle.textContent = tourDetails[key].title;
            modalDesc.innerHTML = tourDetails[key].desc;
            modalImg.src = tourDetails[key].image;

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // ===========================
    // CLOSE MODAL
    // ===========================
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// ===========================
// MODAL BOOK NOW → CONTACT
// ===========================

const modalBookBtn = document.getElementById("modalBookBtn");

if (modalBookBtn) {
    modalBookBtn.addEventListener("click", () => {

        // close modal
        modal.classList.remove("active");
        document.body.style.overflow = "";

        // scroll to contact
        const contactSection = document.getElementById("contact");
        const nameInput = document.getElementById("name");

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });

            // focus input after scroll
            setTimeout(() => {
                if (nameInput) nameInput.focus();
            }, 700);
        }
    });
}
