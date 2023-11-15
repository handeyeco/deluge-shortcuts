function filterList(search, list) {
  if (!search) return list;

  const clone = structuredClone(list);
  const filtered = {};

  for (const [grouping, shortcuts] of Object.entries(clone)) {
    const filteredShortcuts = shortcuts.filter((shortcut) => {
      return shortcut.title.toLowerCase().includes(search.toLowerCase());
    });

    if (filteredShortcuts.length) {
      filtered[grouping] = filteredShortcuts;
    }
  }

  return Object.keys(filtered).length ? filtered : null;
}

export default filterList;
