// ===========================
// SMOOTH DRAG + ARROW SLIDER
// ===========================
const slider = document.querySelector(".tours-scroll");
const btnLeft = document.querySelector(".tour-arrow.left");
const btnRight = document.querySelector(".tour-arrow.right");

if (slider) {
    // -------- DRAG SCROLL --------
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.4; 
        slider.scrollLeft = scrollLeft - walk;
    });

    // -------- TOUCH SCROLL (MOBILE) --------
    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 1.2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // -------- ARROW BUTTONS --------
    const scrollAmount = 300; // how much to scroll per click

    if (btnLeft) {
        btnLeft.addEventListener("click", () => {
            slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }

    if (btnRight) {
        btnRight.addEventListener("click", () => {
            slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    }
}
