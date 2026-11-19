
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 1. MOBILE NAVIGATION
  // ==========================================

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

      const opened = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(opened));

      menuToggle.setAttribute(
        "aria-label",
        opened ? "Close navigation" : "Open navigation"
      );

      menuToggle.textContent = opened ? "✕" : "☰";

    });

    mainNav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

        menuToggle.textContent = "☰";

      });

    });

  }


  // ==========================================
  // 2. AUTOMATIC FOOTER YEAR
  // ==========================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // ==========================================
  // 3. DIRECTORY SEARCH
  // ==========================================

  const searchButton = document.getElementById("searchButton");

  const searchInput = document.getElementById("directorySearch");

  const directoryType = document.getElementById("directoryType");

  const searchMessage = document.getElementById("searchMessage");


  function runDirectorySearch() {

    const term = searchInput.value.trim();

    const type = directoryType.value;

    if (!term && !type) {

      searchMessage.textContent =
        "Enter a business, profession, service or select a membership type.";

      return;

    }

    searchMessage.textContent =
      "Your search is ready for the ABN directory database. No public member listings are currently connected to this demonstration website.";

  }


  if (searchButton && searchInput && directoryType && searchMessage) {

    searchButton.addEventListener("click", runDirectorySearch);

    searchInput.addEventListener("keydown", function (event) {

      if (event.key === "Enter") {
        event.preventDefault();
        runDirectorySearch();
      }

    });

    directoryType.addEventListener("change", function () {

      if (searchInput.value.trim() || directoryType.value) {
        runDirectorySearch();
      }

    });

  }


  // ==========================================
  // 4. MEMBERSHIP PATHWAY SELECTION
  // ==========================================

  window.chooseType = function (type) {

    const select = document.getElementById("applicantType");

    if (!select) return;

    select.value = type;

    const applicationSection = document.getElementById("application");

    if (applicationSection) {

      applicationSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  };


  // ==========================================
  // 5. MEMBERSHIP APPLICATION PREVIEW
  // ==========================================

  const applicationForm = document.getElementById("applicationForm");

  const applicationResult = document.getElementById("applicationResult");


  if (applicationForm && applicationResult) {

    applicationForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!applicationForm.reportValidity()) return;

      applicationResult.textContent =
        "Your form has passed the local demonstration checks. It has NOT been sent to ABN, saved, or emailed. The secure registration backend and email service must be connected before real applications can be received. The agreed next step in the live system is an automatic email containing your applicable verification requirements.";

      applicationResult.classList.add("show");

    });

  }


  // ==========================================
  // 6. VENDOR TESTIMONIAL PREVIEW
  // ==========================================

  const testimonialForm = document.getElementById("testimonialForm");

  const testimonialResult = document.getElementById("testimonialResult");


  if (testimonialForm && testimonialResult) {

    testimonialForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!testimonialForm.reportValidity()) return;

      testimonialResult.textContent =
        "Your testimonial has passed the local preview checks. It has NOT been submitted, saved or published. A secure testimonial submission and ABN review process must be connected first. Publication requires approval and your consent.";

      testimonialResult.classList.add("show");

    });

  }


  // ==========================================
  // 7. INITIALISATION COMPLETE
  // ==========================================

  console.log("ABN-7742 Public Website JavaScript Loaded Successfully.");

});
