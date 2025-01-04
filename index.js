function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  }


document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".hero-content h1");
    text.style.opacity = "0";
    text.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      text.style.transition = "all 1s ease-in-out";
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    }, 200);
  });


window.addEventListener("load", () => {
    const section = document.querySelector(".science-section");
    section.style.opacity = "0";
    section.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      section.style.opacity = "1";
    }, 500);
  });