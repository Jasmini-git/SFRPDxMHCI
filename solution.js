document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".solution-nav li");
    const sections = document.querySelectorAll(".solution-section");
  
    navItems.forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
  
        const targetId = item.getAttribute("data-target");
  
        // remove active class from all
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
  
        // hide all sections
        sections.forEach(section => section.style.display = "none");
  
        // show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
        }
      });
    });
  });
  