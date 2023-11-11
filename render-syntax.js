function renderSyntaxRow(command, description) {
  return `
    <tr>
      <td><pre>${command}</pre></td>
      <td>
        <div class="entry-image__container">
        <svg viewBox="0 0 100 100">
          ${ACTION_SVG[command] || ELEMENT_SVG[command]}
        </svg>
        </div>
      </td>
      <td>${description}</td>
    </tr>
    `;
}

function filterSyntax() {
  if (!search) return SYNTAX;

  const clone = structuredClone(SYNTAX);
  const filtered = {};

  for (const [grouping, options] of Object.entries(clone)) {
    const filteredOptions = {};

    Object.entries(options).forEach(([option, description]) => {
      if (
        option.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase())
      ) {
        filteredOptions[option] = description;
      }
    });

    if (Object.keys(filteredOptions).length) {
      filtered[grouping] = filteredOptions;
    }
  }

  return Object.keys(filtered).length ? filtered : null;
}

function renderSyntax() {
  const filtered = filterSyntax();
  if (!filtered) {
    mount.innerHTML = renderNoResults();
    return;
  }

  let nextHTML = "";
  for (const [grouping, options] of Object.entries(filtered)) {
    nextHTML += `<div class="entry__group">${grouping}</div>`;

    Object.entries(options).forEach(([option, description]) => {
      const renderedOption = ACTION_SVG[option] || ELEMENT_SVG[option]
      nextHTML += `
        <div class="entry__container">
          <div class="entry__description">${description}</div>
          <div class="entry-image__container">
            <svg viewBox="0 0 100 100">
              ${renderedOption ? renderedOption : `<text x="20" y="60" fill="black">${option}</text>`}
            </svg>
          </div>
          <div class="entry__command">${option}</div>
        </div>
      `;
    });
  }
  mount.innerHTML = nextHTML;
}
