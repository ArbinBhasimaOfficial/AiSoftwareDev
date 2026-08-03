document.addEventListener("DOMContentLoaded", () => {
  const btnHamburger = document.querySelector("#btn-hamburger");
  const sidebarNav = document.querySelector("#sidebar");
  const btnSidebarClose = document.querySelector("#btn-sidebar-close");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  const overlay = document.querySelector("#overlay");

  // Helper functions to open and close sidebar + overlay
  const openSidebar = () => {
    sidebarNav.classList.add("is-open");
    overlay.classList.add("is-active");
  };

  const closeSidebar = () => {
    sidebarNav.classList.remove("is-open");
    overlay.classList.remove("is-active");
  };

  // Open menu
  btnHamburger.addEventListener("click", openSidebar);

  // Close menu via 'X' button
  btnSidebarClose.addEventListener("click", closeSidebar);

  // Close menu when clicking the blurred overlay backdrop
  overlay.addEventListener("click", closeSidebar);

  // Close menu when clicking any sidebar link
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
});

