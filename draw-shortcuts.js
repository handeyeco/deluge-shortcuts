// Full dimension
const D = 100;
// Action dimension
const A = D - 15;
// Element dimension
const E = A - 20;
// Spacing between commands
const S = 10;

const BLACK = "#000";
const WHITE = "#FFF";
const L_GREY = "#CCC";
const D_GREY = "#666";

const ACTION_SVG = {
  press: `
    <circle cx="${D / 2}" cy="${D / 2}" r="${
    A / 2
  }" stroke="black" stroke-width="4" fill="none" />
  `,
  hold: `
    <rect x="7" y="7" width="${A}" height="${A}" stroke="black" stroke-width="4" fill="none" />
  `,
  release: `
    <rect x="7" y="7" width="${A}" height="${A}" stroke="black" stroke-width="4" stroke-dasharray="8" fill="none" />
  `,
  turn: `
    <circle cx="${D / 2}" cy="${D / 2}" r="${
    A / 2
  }" stroke="black" stroke-width="4" fill="none" stroke-dasharray="20% 5%" />
  `,
  menu: ` 
    <text x="18" y="60" fill="black">SCR</text>
  `,
};

function drawCircle(fill, stroke) {
  return `<circle cx="${D / 2}" cy="${D / 2}" r="${
    E / 2
  }" fill="${fill}" stroke="${stroke}" stroke-width="1" />`;
}

function drawGrid(fill, stroke) {
  return `<rect x="20" y="20" width="${E - 5}" height="${
    E - 5
  }" rx="15" fill="${fill}" stroke="${stroke}" stroke-width="1" />`;
}

function drawTextCircle(text, stroke = L_GREY, fill = D_GREY, color = BLACK) {
  const x = text.length === 2 ? "30" : "40";
  return `
    ${drawCircle(stroke, fill)}
    <text x="${x}" y="60" fill="${color}">${text}</text>
  `;
}

const ELEMENT_SVG = {
  X: drawTextCircle("X", BLACK, BLACK, WHITE),
  Y: drawTextCircle("Y", BLACK, BLACK, WHITE),
  PARAMETER: drawCircle("#FFD700", "#FFD700"),
  ENTIRE: drawTextCircle("AE"),
  SONG: drawTextCircle("SN"),
  SELECT: drawTextCircle("S", BLACK, BLACK, WHITE),
  SYNTH: drawTextCircle("SY"),
  KIT: drawTextCircle("KT"),
  MIDI: drawTextCircle("MD"),
  CV: drawTextCircle("CV"),
  SCALE: drawTextCircle("SC"),
  BACK: drawTextCircle("BK"),
  LOAD: drawTextCircle("LD"),
  SAVE: drawTextCircle("SV"),
  LEARN: drawTextCircle("L"),
  TEMPO: drawTextCircle("T", BLACK, BLACK, WHITE),
  PLAY: drawTextCircle("P", "#51dd00", "#16830f"),
  RECORD: drawTextCircle("R", "#fe5c2e", "#ae140b"),
  SHIFT: drawTextCircle("S"),
  GRID: `
    ${drawGrid(WHITE, D_GREY)}
    <text x="40" y="60" fill="black">G</text>
  `,
  GRID_LIT: `
    ${drawGrid(L_GREY, D_GREY)}
    <text x="40" y="60" fill="black">G</text>
  `,
  GRID_UNLIT: `
    ${drawGrid(D_GREY, L_GREY)}
    <text x="40" y="60" fill="white">G</text>
  `,
  LAUNCH: `
    ${drawGrid(L_GREY, D_GREY)}
    <text x="40" y="60" fill="black">L</text>
  `,
  AUDITION: `
    ${drawGrid(L_GREY, D_GREY)}
    <text x="40" y="60" fill="black">A</text>
  `,
  MENU: ` 
    <text x="18" y="60" fill="black">SCR</text>
  `,
};

function drawAction(action) {
  return ACTION_SVG[action];
}

function drawElement(element) {
  return ELEMENT_SVG[element];
}

function drawActionElementGroup(action, element, index) {
  const groupContent =
    action === "menu"
      ? drawElement("MENU")
      : `
        ${drawAction(action)}
        ${drawElement(element)}
      `;

  return `
    <g transform="translate(${D * index + S * index})">
      ${groupContent}
    </g>
  `;
}

function drawShortcut(shortcut) {
  const stepsRegex = /\w+\([A-Za-z _]+\)/g;
  const steps = shortcut.match(stepsRegex);

  let nextHTML = "";

  steps.forEach((step, i) => {
    const [_, action, element] = step.match(/(\w+)\(([A-Za-z _]+)\)/);
    nextHTML += drawActionElementGroup(action, element, i);
  });

  return `
    <div class="entry-image__container">
      <svg viewBox="0 0 500 100">
        ${nextHTML}
      </svg>
    </div>
  `;
}
