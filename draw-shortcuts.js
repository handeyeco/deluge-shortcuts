// Full dimension
const D = 100;
// Action dimension
const A = D - 15;
// Element dimension
const E = A - 20;
// Spacing between commands
const S = 10;

const BLACK = "#111";
const WHITE = "#FFF";
const L_GREY = "#CCC";
const D_GREY = "#666";

const ACTION_SVG = {
  press: `
    <circle cx="${D / 2}" cy="${D / 2}" r="${
    A / 2
  }" stroke="#111" stroke-width="4" fill="none" />
  `,
  hold: `
    <rect x="7" y="7" width="${A}" height="${A}" stroke="#111" stroke-width="4" fill="none" />
  `,
  release: `
    <rect x="7" y="7" width="${A}" height="${A}" stroke="#111" stroke-width="4" stroke-dasharray="8" fill="none" />
  `,
  turn: `
    <circle cx="${D / 2}" cy="${D / 2}" r="${
    A / 2
  }" stroke="#111" stroke-width="4" fill="none" stroke-dasharray="40 10" />
  `,
  menu: drawCenteredText("SCR"),
};

function drawCenteredText(text, fill = BLACK) {
  return `
    <text x="${D/2}" y="${D/2}" fill="${fill}" dominant-baseline="central" text-anchor="middle">
      ${text}
    </text>
  `
}

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

function drawTextCircle(text, fill = L_GREY, stroke = D_GREY, color = BLACK) {
  const x = text.length === 2 ? "30" : "40";
  return `
    ${drawCircle(fill, stroke)}
    ${drawCenteredText(text, color)}
  `;
}

function drawTextGrid(text, fill = D_GREY, stroke = L_GREY, color = BLACK) {
  const x = text.length === 2 ? "30" : "40";
  return `
    ${drawGrid(fill, stroke)}
    ${drawCenteredText(text, color)}
  `;
}

const ELEMENT_SVG = {
  X: drawTextCircle("X", BLACK, BLACK, WHITE),
  Y: drawTextCircle("Y", BLACK, BLACK, WHITE),
  PARAMETER: drawTextCircle("PA", "#FFD700", "#FFD700"),
  LOWER_PARAM: drawTextCircle("LP", "#FFD700", "#FFD700"),
  UPPER_PARAM: drawTextCircle("UP", "#FFD700", "#FFD700"),
  ENTIRE: drawTextCircle("AE"),
  SONG: drawTextCircle("SN"),
  CLIP: drawTextCircle("CP"),
  SELECT: drawTextCircle("S", BLACK, BLACK, WHITE),
  SYNTH: drawTextCircle("SY"),
  KIT: drawTextCircle("KT"),
  MIDI: drawTextCircle("MD"),
  CV: drawTextCircle("CV"),
  KEY: drawTextCircle("K"),
  SCALE: drawTextCircle("SC"),
  CROSS: drawTextCircle("CR"),
  BACK: drawTextCircle("BK"),
  LOAD: drawTextCircle("LD"),
  SAVE: drawTextCircle("SV"),
  LEARN: drawTextCircle("LN"),
  TEMPO: drawTextCircle("T", BLACK, BLACK, WHITE),
  TAP: drawTextCircle("TP"),
  SYNC: drawTextCircle("SY"),
  PLAY: drawTextCircle("P", "#61c049", "#61c049"),
  RECORD: drawTextCircle("R", "#ff2e17", "#ff2e17", WHITE),
  SHIFT: drawTextCircle("S"),
  GRID: drawTextGrid("G", WHITE, BLACK),
  GRID_LIT: drawTextGrid("G", L_GREY, D_GREY),
  GRID_UNLIT: drawTextGrid("G", D_GREY, L_GREY, WHITE),
  LAUNCH: drawTextGrid("L", L_GREY, D_GREY),
  AUDITION: drawTextGrid("A", L_GREY, D_GREY),
  WAVE_START: drawTextGrid("S", "#61c049", "#61c049"),
  WAVE_END: drawTextGrid("E", "#ff2e17", "#ff2e17", WHITE),
  WAVE_LOOP_START: drawTextGrid("LS", "#48cff0", "#48cff0"),
  WAVE_LOOP_END: drawTextGrid("LE", "#664aa6", "#664aa6", WHITE),
  MENU: drawCenteredText("SCR"),
  EXTERNAL: drawCenteredText("EXT"),
};

function drawAction(action) {
  return ACTION_SVG[action];
}

function drawElement(element) {
  return ELEMENT_SVG[element];
}

function drawActionElementGroup(action, element, index) {
  const gridRegex = /^\d+,\d+$/

  let groupContent
  if (action === "menu") {
    groupContent = drawElement("MENU")
  } else if (gridRegex.test(element)) {
    groupContent = `
      ${drawAction(action)}
      ${drawCenteredText(element)}
    `
  } else {
    groupContent = `
      ${drawAction(action)}
      ${drawElement(element)}
    `
  }

  return `
    <g transform="translate(${D * index + S * index})">
      ${groupContent}
    </g>
  `;
}

function drawShortcut(shortcut) {
  const stepsRegex = /\w+\([a-zA-Z0-9_ ,]+\)/g;
  const steps = shortcut.match(stepsRegex);

  let nextHTML = "";

  steps.forEach((step, i) => {
    const [_, action, element] = step.match(/(\w+)\(([a-zA-Z0-9_ ,]+)\)/);
    nextHTML += drawActionElementGroup(action, element, i);
  });

  return `
    <div class="entry-image__container">
      <svg viewBox="0 0 1000 100">
        ${nextHTML}
      </svg>
    </div>
  `;
}