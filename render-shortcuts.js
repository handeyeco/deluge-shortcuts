function filterShortcuts() {
  if (!search) return SHORTCUTS;

  const clone = structuredClone(SHORTCUTS);
  const filtered = {};

  for (const [grouping, shortcuts] of Object.entries(clone)) {
    const filteredShortcuts = shortcuts.filter((shortcut) => {
      return shortcut.description.toLowerCase().includes(search.toLowerCase());
    });

    if (filteredShortcuts.length) {
      filtered[grouping] = filteredShortcuts;
    }
  }

  return Object.keys(filtered).length ? filtered : null;
}

function renderShortcuts() {
  const mount = document.getElementById("list-mount");

  const filtered = filterShortcuts();
  if (!filtered) {
    mount.innerHTML = "No results match search";
    return;
  }

  let nextHTML = "";
  for (const [grouping, shortcuts] of Object.entries(filtered)) {
    nextHTML += `<div class="entry__group">${grouping}</div>`;

    for (const shortcut of shortcuts) {
      nextHTML += `
        <div class="entry__container">
          <div class="entry__description">${shortcut.description}</div>
          ${drawShortcut(shortcut.command)}
          <div class="entry__command">${shortcut.command}</div>
        </div>
      `;
    }
  }

  mount.innerHTML = nextHTML;
}
