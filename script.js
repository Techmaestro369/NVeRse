document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll(".card").forEach((card) => observer.observe(card));
});
// Sidebar Hover Effect (Expands on Hover)
const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("mouseenter", () => {
    sidebar.style.padding = "30px"; // Expands when hovered
});

sidebar.addEventListener("mouseleave", () => {
    sidebar.style.padding = "20px"; // Shrinks back when mouse leaves
});