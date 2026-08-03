const idWithQuerySelector = document.querySelector('#id1');
const id1WithGetElementById = document.getElementById('id1');
const id2WithGetElementById = document.getElementById('id2');

const classWithQuerySelector = document.querySelector('.class1');   
// all elements
const ClassWithAllElements = document.querySelectorAll('.class1');

const classWithGetElementsByClassName = document.getElementsByClassName('class1');

const selectionWidthDataAttribute = document.querySelectorAll('[data-attribute-name]');

const selectionWidthDataAttributeValue = document.querySelectorAll('[data-attribute-name="attribute-value-1"]');


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



console.log({
    idWithQuerySelector,
    id1WithGetElementById,
    id2WithGetElementById,
    classWithQuerySelector,
    ClassWithAllElements,
    classWithGetElementsByClassName,
    selectionWidthDataAttribute,
    selectionWidthDataAttributeValue
})