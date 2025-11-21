document.addEventListener("DOMContentLoaded", () => {
  // Update footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Course Search
  const searchInput = document.getElementById("searchInput");
  const courseList = document.getElementById("courseList");
  const courses = courseList.getElementsByClassName("course-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    for (let course of courses) {
      const title = course.querySelector(".course-title").textContent.toLowerCase();
      const desc = course.querySelector(".course-desc").textContent.toLowerCase();
      course.style.display = title.includes(query) || desc.includes(query) ? "flex" : "none";
    }
  });

  // Enroll Button Popup
  const enrollButtons = document.querySelectorAll(".enroll-btn");
  enrollButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.closest(".course-card").querySelector(".course-title").textContent;
      alert(`✅ You have enrolled in "${title}" successfully!`);
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
  });

  // Animate Courses on Scroll
  const courseCards = document.querySelectorAll(".course-card");
  function animateCourses() {
    const triggerBottom = window.innerHeight * 0.85;
    courseCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom) {
        setTimeout(() => { card.classList.add("show"); }, index * 150); // staggered
      }
    });
  }
  window.addEventListener("scroll", animateCourses);
  animateCourses(); // initial trigger
});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  setTimeout(() => preloader.style.display = "none", 800);
});
