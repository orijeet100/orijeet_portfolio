document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");

    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
      content.style.opacity = "1";
      content.style.transition = "opacity 0.5s ease";
    }, 500);
  });

  // Progress bars filling function
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fillProgressBars() {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const skillValue = bar.getAttribute("data-skill");
      if (isElementInViewport(bar) && !bar.classList.contains("filled")) {
        bar.style.width = skillValue + "%";
        bar.classList.add("filled");
      }
    });
  }

  window.addEventListener("scroll", fillProgressBars);
  window.addEventListener("resize", fillProgressBars);

  // Navigation menu functionality
  const navLinks = document.querySelectorAll(".nav-link");
  const openBtn = document.querySelector(".open");
  const closeBtn = document.querySelector(".close");
  const menuItem = document.querySelector(".menu_item");

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      navLinks.forEach((nav) => {
        nav.classList.remove("active");
      });
      menuItem.classList.remove("active");
      closeBtn.classList.remove("active");
      openBtn.classList.add("active");

    });
  });

  openBtn.addEventListener("click", () => {
    menuItem.classList.add("active");
    closeBtn.classList.add("active");
    openBtn.classList.remove("active");
  });

  closeBtn.addEventListener("click", () => {
    menuItem.classList.remove("active");
    closeBtn.classList.remove("active");
    openBtn.classList.add("active");
  });
});
