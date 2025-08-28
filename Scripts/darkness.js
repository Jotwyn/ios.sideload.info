document.addEventListener("DOMContentLoaded", () => {
  const darkBtn = document.getElementById("darkModeToggle");

  // Detect system preference
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function enableDark() {
    document.body.classList.add("dark");
    darkBtn.textContent = "☀️";
  }

  function disableDark() {
    document.body.classList.remove("dark");
    darkBtn.textContent = "🌙";
  }

  // Load saved theme or system preference
  const savedTheme = localStorage.getItem("darkMode");
  if (savedTheme === "enabled") enableDark();
  else if (savedTheme === "disabled") disableDark();
  else if (darkQuery.matches) enableDark();

  // Listen for system preference changes (iOS support)
  darkQuery.addEventListener("change", e => {
    if (!localStorage.getItem("darkMode")) {
      if (e.matches) enableDark();
      else disableDark();
    }
  });

  // Dark mode toggle button
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
      darkBtn.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkBtn.textContent = "🌙";
    }
  });

  // Menu functions
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

  document.addEventListener("click", e => {
    const menu = document.getElementById("dropdownMenu");
    const hamburger = document.querySelector(".hamburger");
    if (!menu.contains(e.target) && e.target !== hamburger) {
      menu.style.display = "none";
      document.getElementById("subMenu").style.display = "none";
      document.getElementById("moreSubMenu").style.display = "none";
    }
  });

  // Expose menu functions to global scope
  window.toggleMenu = toggleMenu;
  window.toggleSubMenu = toggleSubMenu;
  window.toggleMoreSubMenu = toggleMoreSubMenu;
});
