(() => {
  // src/assets/js/nav.js
  var CSbody = document.querySelector("body");
  var CSnavbarMenu = document.querySelector("#cs-navigation");
  var CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
  CShamburgerMenu.addEventListener("click", function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
  });
  function ariaExpanded() {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");
    if (csExpanded === "false") {
      csUL.setAttribute("aria-expanded", "true");
    } else {
      csUL.setAttribute("aria-expanded", "false");
    }
  }
  var dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
  for (const item of dropDowns) {
    const onClick = () => {
      item.classList.toggle("cs-active");
    };
    item.addEventListener("click", onClick);
  }
  document.addEventListener("DOMContentLoaded", (event) => {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll("#cs-navigation .cs-li-link");
    menuItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (currentPath === href || currentPath === href + "/") {
        item.classList.add("cs-active");
        const parentDropdown = item.closest(".cs-dropdown");
        if (parentDropdown) {
          const parentLink = parentDropdown.querySelector("span.cs-li-link");
          parentLink.classList.add("cs-active");
        }
      }
    });
    const dropLinks = document.querySelectorAll("#cs-navigation .cs-drop-link");
    dropLinks.forEach((item) => {
      const href = item.getAttribute("href");
      if (currentPath === href || currentPath === href + "/") {
        item.classList.add("cs-active");
        const parentDropdown = item.closest(".cs-dropdown");
        if (parentDropdown) {
          const parentLink = parentDropdown.querySelector("span.cs-li-link");
          parentLink.classList.add("cs-active");
        }
      }
    });
  });
})();
//# sourceMappingURL=nav.js.map
