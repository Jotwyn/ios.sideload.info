  const searchableFiles = [
    { filename: "signers/jailed/altstore.html", title: "AltStore", description: "Guide: How to install AltStore", url: "signers/jailed/altstore.html" },
    { filename: "signers/jailed/feather.html", title: "Feather", description: "Guide: How to install Feather", url: "signers/jailed/feather.html" },
    { filename: "signers/jailed/sideloadly.html", title: "Sideloadly", description: "Guide: How to install Sideloadly", url: "signers/jailed/sideloadly.html" },
    { filename: "signers/jailed/SideStore.html", title: "SideStore", description: "Guide: How to install SideStore", url: "signers/jailed/SideStore.html" },
    { filename: "signers/jailed/trollhelperota.html", title: "TrollHelperOTA", description: "Guide: How to install TrollHelperOTA", url: "signers/jailed/trollhelperota.html" },
    { filename: "signers/jailed/trollinstallermdc.html", title: "TrollInstallerMDC", description: "Guide: How to install TrollInstallerMDC", url: "signers/jailed/trollinstallermdc.html" },
    { filename: "signers/jailed/trollinstallerx.html", title: "TrollInstallerX", description: "Guide: How to install TrollInstallerX", url: "signers/jailed/trollinstallerx.html" },
    { filename: "signers/jailed/trollmisaka.html", title: "TrollMisaka", description: "Guide: How to install TrollMisaka", url: "signers/jailed/trollmisaka.html" },
    { filename: "signers/jailed/trollrestore.html", title: "TrollRestore", description: "Guide: How to install TrollRestore", url: "signers/jailed/trollrestore.html" },
    { filename: "signers/jailed/scarlet.html", title: "Scarlet", description: "Guide: How to install Scarlet", url: "signers/jailed/scarlet.html" },
    { filename: "signers/jailed/esign.html", title: "ESign", description: "Guide: How to install ESign", url: "signers/jailed/esign.html" },
    { filename: "signers/jailed/esign-khoindvn.html", title: "ESign (Khoindvn)", description: "Guide: How to install ESign (Khoindvn)", url: "signers/jailed/esign-khoindvn.html" },
    { filename: "signers/jailed/sideloader.html", title: "Sideloader", description: "Guide: How to install Sideloader", url: "signers/jailed/sideloader.html" },
    { filename: "signers/jailed/appdb.html", title: "AppDB", description: "Guide: How to install AppDB", url: "signers/jailed/appdb.html" },
    { filename: "signers/jailed/kravasign.html", title: "KravaSign", description: "Guide: How to install KravaSign", url: "signers/jailed/kravasign.html" },
    { filename: "signers/jailed/signulous.html", title: "Signulous", description: "Guide: How to install Signulous", url: "signers/jailed/signulous.html" },
    { filename: "signers/jailed/dxsign.html", title: "DXSign", description: "Guide: How to install DXSign", url: "signers/jailed/dxsign.html" },
    { filename: "signers/jailed/flekst0re.html", title: "FlekSt0re", description: "Guide: How to install FlekSt0re", url: "signers/jailed/flekst0re.html" },
    { filename: "signers/jailbreak/trollstore-lite.html", title: "TrollStore Lite", description: "Guide: How to install TrollStore Lite", url: "signers/jailbreak/trollstore-lite.html" },
    { filename: "signers/jailbreak/appsync-unified.html", title: "Appsync Unified", description: "Guide: How to install Appsync Unified", url: "signers/jailbreak/appsync-unified.html" },
    { filename: "https://ios.sideload.info/siteinfo.html", title: "Site Information", description: "Information and credits related to the site & documentation", url: "https://ios.sideload.info/siteinfo.html" },
    { filename: "https://ios.sideload.info/enabling-jit.html", title: "Enabling JIT", description: "Learn how to enable JIT on modern iOS versions", url: "https://ios.sideload.info/enabling-jit.html" },
    { filename: "https://ios.sideload.info/decrypting-apps.html", title: "Decrypting Apps", description: "Learn how to decrypt apps on iOS devices", url: "https://ios.sideload.info/decrypting-apps.html" },
    { filename: "https://ios.sideload.info/getstarted.html", title: "Getting Started", description: "Learn how to sideload on your iOS device, today", url: "https://ios.sideload.info/getstarted.html" },
    { filename: "https://ios.sideload.info/errors.html", title: "Errors", description: "Learn common errors & troubleshooting steps", url: "https://ios.sideload.info/errors.html" },
    { filename: "https://ios.sideload.info/apple.html", title: "Apple", description: "Apple hates you.", url: "https://ios.sideload.info/apple.html" },
    { filename: "https://ios.sideload.info/trollstore.html", title: "TrollStore", description: "Permasigner for iOS 14 - 16.6.1 & 17.0 that bypasses iOS codesigning", url: "https://ios.sideload.info/trollstore.html" },
    { filename: "https://ios.sideload.info/sidejitserver.html", title: "SideJITServer", description: "Enabling JIT on iOS 17.0+", url: "https://ios.sideload.info/sidejitserver.html" },
    { filename: "https://ios.sideload.info/skitdebug.html", title: "SkitDebug", description: "Enabling JIT on iOS 17.4+", url: "https://ios.sideload.info/skitdebug.html" },
    { filename: "https://ios.sideload.info/jitterbug.html", title: "Enabling JIT", description: "Enabling JIT on iOS 14.5+", url: "https://ios.sideload.info/jitterbug.html" },
    { filename: "https://ios.sideload.info/cowabunga.html", title: "Cowabunga", description: "Removes any blacklist from enterprise certificates, bypass app limit & more using the MDC exploit on iOS 15 - 16.1.2", url: "https://ios.sideload.info/cowabunga.html" },
    { filename: "https://ios.sideload.info/blacklist-be-gone.html", title: "Blacklist Be Gone", description: "Removes any blacklist from enterprise certificates on iOS 17.0 - 18.0.1. Requires you to disable Find My.", url: "https://ios.sideload.info/blacklist-be-gone.html" }
  ];

  const searchInput = document.getElementById('siteSearch');
  const resultsDiv = document.getElementById('searchResults');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      resultsDiv.style.display = 'none';
      resultsDiv.innerHTML = '';
      return;
    }

    const matches = searchableFiles.filter(file => {
      const searchableText = (file.filename + " " + file.title + " " + file.description).toLowerCase();
      return searchableText.includes(query);
    });

    if (matches.length === 0) {
      resultsDiv.innerHTML = "<div style='padding: 0.5rem 1rem; color: #666;'>No results found</div>";
      resultsDiv.style.display = 'block';
      return;
    }

    resultsDiv.innerHTML = matches.map(file => `
      <a href="${file.url}" style="display: block; padding: 0.5rem 1rem; text-decoration: none; color: #007acc; border-bottom: 1px solid #eee;">
        <strong>${file.title}</strong><br/>
        <small style="color: #666;">${file.description}</small>
      </a>
    `).join('');
    resultsDiv.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!resultsDiv.contains(e.target) && e.target !== searchInput) {
      resultsDiv.style.display = 'none';
    }
  });
