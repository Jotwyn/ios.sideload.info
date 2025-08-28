 const darkBtn = document.getElementById("darkModeToggle");

  // Load saved theme
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkBtn.textContent = "☀️";
  }

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
      darkBtn.textContent = "☀️"; // sun emoji
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkBtn.textContent = "🌙"; // moon emoji
    }
  });

  // Existing menu functions
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

  document.addEventListener("click", function(event) {
    const menu = document.getElementById("dropdownMenu");
    const hamburger = document.querySelector(".hamburger");
    if (!menu.contains(event.target) && event.target !== hamburger) {
      menu.style.display = "none";
      document.getElementById("subMenu").style.display = "none";
      document.getElementById("moreSubMenu").style.display = "none";
    }
  });

  const darkBtn = document.getElementById("darkModeToggle");

  // Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Load saved theme or system preference
  const savedTheme = localStorage.getItem("darkMode");

  if (savedTheme === "enabled" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
    darkBtn.textContent = "☀️"; // sun emoji
  }

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
      darkBtn.textContent = "☀️"; // sun emoji
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkBtn.textContent = "🌙"; // moon emoji
    }
  });
