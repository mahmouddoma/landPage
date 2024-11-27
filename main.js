document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navbar links
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent default action if it starts with a hash
      if (this.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
});
