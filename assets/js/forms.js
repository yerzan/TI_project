// ===========================
// CONTACT FORM → EMAIL
// ===========================
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent("Travel Website - New Message");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:mkleban32@gmail.com?subject=${subject}&body=${body}`;

        // Show thx message
        thankYouMessage.style.display = "block";

        // Reset form fields
        contactForm.reset();

        // Thx message aft 3 sec
        setTimeout(() => {
            thankYouMessage.style.display = "none";
        }, 3000); // 3000ms
    });
}
