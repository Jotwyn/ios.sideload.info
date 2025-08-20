    function toggleMenu() {
      const menu = document.getElementById("dropdownMenu");
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    }

    function toggleSubMenu() {
      const sub = document.getElementById("subMenu");
      sub.style.display = sub.style.display === "flex" ? "none" : "flex";
    }

    function toggleMoreSubMenu(event) {
      event.preventDefault();
      event.stopPropagation();
      const moreMenu = document.getElementById("moreSubMenu");
      moreMenu.style.display = moreMenu.style.display === "flex" ? "none" : "flex";
    }

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
      const menu = document.getElementById("dropdownMenu");
      const hamburger = document.querySelector(".hamburger");
      if (!menu.contains(event.target) && event.target !== hamburger) {
        menu.style.display = "none";
        document.getElementById("subMenu").style.display = "none";
        document.getElementById("moreSubMenu").style.display = "none";
      }
    });