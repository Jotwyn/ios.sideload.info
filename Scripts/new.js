  function toggleMenu() {
    const panel = document.getElementById('menuPanel');
    const open = panel.classList.toggle('open');
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function toggleSubMenu() {
    const sub = document.getElementById('subMenu');
    sub.style.display = sub.style.display === 'flex' ? 'none' : 'flex';
  }

  function toggleMoreSubMenu(event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const more = document.getElementById('moreSubPanel');
    more.style.display = more.style.display === 'block' ? 'none' : 'block';
  }

  document.getElementById('hamburgerBtn').addEventListener('click', toggleMenu);
  document.getElementById('panelClose').addEventListener('click', toggleMenu);

  document.addEventListener('click', function(event) {
    const panel = document.getElementById('menuPanel');
    const hamburger = document.getElementById('hamburgerBtn');
    if (!panel.contains(event.target) && event.target !== hamburger && panel.classList.contains('open')) {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden','true');
    }
  });

  const menuSearch = document.getElementById('menuSearch');
  const tocList = document.getElementById('tocList');

  function buildTOC() {
    tocList.innerHTML = '';
    const headings = Array.from(document.querySelectorAll('main h2'));
    headings.forEach((h, idx) => {
      if (!h.id) h.id = 'heading-' + idx;
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.addEventListener('click', () => {
        document.getElementById('menuPanel').classList.remove('open');
      });
      tocList.appendChild(a);
    });
  }

  menuSearch.addEventListener('input', () => {
    const q = menuSearch.value.trim().toLowerCase();
    const items = Array.from(tocList.querySelectorAll('a'));
    items.forEach(a => {
      const matches = a.textContent.toLowerCase().includes(q);
      a.style.display = matches ? 'block' : 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    buildTOC();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const panel = document.getElementById('menuPanel');
      if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden','true');
      }
    }
  });

  const filterBtn = document.getElementById('filterBtn');
  const filterDropdown = document.getElementById('filterDropdown');
  const filterOptions = document.querySelectorAll('.filterOption');

  const tables = {
    recommended: document.getElementById('recommendedTable'),
    nocomputer: document.getElementById('noComputerTable'),
    jailbroken: document.getElementById('jailbrokenTable')
  };

  filterBtn.addEventListener('click', () => {
    const open = filterDropdown.style.display === 'block';
    filterDropdown.style.display = open ? 'none' : 'block';
    filterBtn.setAttribute('aria-expanded', String(!open));
  });

  filterOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selected = option.getAttribute('data-filter');
      for (const key in tables) {
        tables[key].style.display = (key === selected) ? 'table' : 'none';
      }
      filterOptions.forEach(btn => {
        btn.classList.remove('active');
        btn.style.border = 'none';
        btn.querySelector('span')?.remove();
        btn.style.fontWeight = '600';
      });
      option.classList.add('active');
      option.style.border = '2px solid #007acc';
      option.style.borderRadius = '6px';
      option.style.fontWeight = '700';
      if (!option.querySelector('span')) {
        const check = document.createElement('span');
        check.textContent = '✔';
        option.appendChild(check);
      }
      filterDropdown.style.display = 'none';
    });
  });

  document.addEventListener('click', e => {
    if (!filterDropdown.contains(e.target) && e.target !== filterBtn) {
      filterDropdown.style.display = 'none';
    }
  });


  (function() {
    document.addEventListener('DOMContentLoaded', () => {
      const main = document.querySelector('main');
      if (!main) return;
      const headings = Array.from(main.querySelectorAll('h2'));
      if (headings.length === 0) return;
      headings.forEach((h) => {
        const content = document.createElement('div');
        content.className = 'collapsible-content';
        let node = h.nextSibling;
        while (node) {
          const next = node.nextSibling;
          if (node.nodeType === 1 && node.tagName === 'H2') break;
          content.appendChild(node);
          node = next;
        }
        if (h.nextSibling) {
          h.parentNode.insertBefore(content, h.nextSibling);
        } else {
          h.parentNode.appendChild(content);
        }
        h.classList.add('collapsible');
        h.setAttribute('role', 'button');
        h.setAttribute('tabindex', '0');
        h.setAttribute('aria-expanded', 'true');
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
        });
        function toggle() {
          const isCollapsed = h.classList.toggle('collapsed');
          if (isCollapsed) {
            h.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = '0px';
            content.classList.add('hidden');
          } else {
            h.setAttribute('aria-expanded', 'true');
            content.classList.remove('hidden');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        }
        h.addEventListener('click', toggle);
        h.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
            ev.preventDefault();
            toggle();
          }
        });
        window.addEventListener('resize', () => {
          if (!h.classList.contains('collapsed')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });
    });
  })();
