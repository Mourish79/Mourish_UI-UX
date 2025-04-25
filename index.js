document.addEventListener("DOMContentLoaded", () => {
  // Portfolio Filter Logic
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
          card.style.display = "block";
        } else {
          card.classList.add("hidden");
          setTimeout(() => {
            if (card.classList.contains("hidden")) {
              card.style.display = "none";
            }
          }, 300);
        }
      });
    });
  });

  // Hamburger Menu Logic
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinksMobile = document.querySelector(".nav-links-mobile");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinksMobile.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  navLinksMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerMenu.classList.remove("active");
      navLinksMobile.classList.remove("active");
    });
  });
});