/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// retrive the navbar__list element from thr DOM
const navbarSection = document.querySelector("#navbar__list");
console.log(navbarSection);

// retrieve all the sections from the DOM
const sections = document.querySelectorAll("section");
console.log(sections);

// a forEach loop for each of the section we need
sections.forEach(function (section) {
  // create a list Item
  let listItem = document.createElement("li");

  // create the nav anchor link item
  let myMenuLink = document.createElement("a");

  // retrieve the section name from the section element
  // and add it to the myMenuLink
  myMenuLink.append(section.dataset.nav);
  console.log(myMenuLink);

  // add myMenuLink to the class
  myMenuLink.classList.add("menu__link");

  // add the myMenuLink to the listItem
  listItem.append(myMenuLink);
  console.log(listItem);

  // add my listItem to the navbarsection
  navbarSection.append(listItem);
  console.log(navbarSection);
});

// create doc for my section
const eachSection = document.querySelectorAll("section");
// create a scroll for the addEventListener in order for the page to scroll
window.addEventListener("scroll", function () {
  eachSection.forEach(function (section) {
    const scrollable = section.getBoundingClientRect();
    console.log(section.id, scrollable);
    const showing =
      scrollable.top >= 0 &&
      scrollable.left > 0 &&
      scrollable.right <= window.innerWidth &&
      scrollable.bottom <= window.innerHeight;
    if (showing) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
});
// create an addEventListener with a click for each sections you want to get to
document.querySelectorAll(".menu__link").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const anchorText = anchor.textContent;
    sections.forEach((section) => {
      const sectionDataNav = section.dataset.nav;
      if (anchorText === sectionDataNav) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
