import "./ShortcutImage.css";

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
  press: () => (
    <circle
      cx={D / 2}
      cy={D / 2}
      r={A / 2}
      stroke="#111"
      strokeWidth="4"
      fill="none"
    />
  ),
  hold: () => (
    <rect
      x="7"
      y="7"
      width={A}
      height={A}
      stroke="#111"
      strokeWidth="4"
      fill="none"
    />
  ),
  release: () => (
    <rect
      x="7"
      y="7"
      width={A}
      height={A}
      stroke="#111"
      strokeWidth="4"
      strokeDasharray="8"
      fill="none"
    />
  ),
  turn: () => (
    <circle
      cx={D / 2}
      cy={D / 2}
      r={A / 2}
      stroke="#111"
      strokeWidth="4"
      fill="none"
      strokeDasharray="40 10"
    />
  ),
  menu: () => <CenteredText text={"SCR"} />,
};

function CenteredText({ text, color = BLACK }) {
  return (
    <text
      x={D / 2}
      y={D / 2}
      fill={color}
      dominantBaseline="central"
      textAnchor="middle"
    >
      {text}
    </text>
  );
}

function Circle({ fill, stroke }) {
  return (
    <circle
      cx={D / 2}
      cy={D / 2}
      r={E / 2}
      fill={fill}
      stroke={stroke}
      strokeWidth="1"
    />
  );
}

function Grid({ fill, stroke }) {
  return (
    <rect
      x="20"
      y="20"
      width={E - 5}
      height={E - 5}
      rx="15"
      fill={fill}
      stroke={stroke}
      strokeWidth="1"
    />
  );
}

function TextCircle({ text, fill = L_GREY, stroke = D_GREY, color = BLACK }) {
  return (
    <>
      <Circle fill={fill} stroke={stroke} />
      <CenteredText text={text} color={color} />
    </>
  );
}

function TextGrid({ text, fill = D_GREY, stroke = L_GREY, color = BLACK }) {
  return (
    <>
      <Grid fill={fill} stroke={stroke} />
      <CenteredText text={text} color={color} />
    </>
  );
}

const ELEMENT_SVG = {
  X: () => <TextCircle text="X" fill={BLACK} stroke={BLACK} color={WHITE} />,
  Y: () => <TextCircle text="Y" fill={BLACK} stroke={BLACK} color={WHITE} />,
  PARAMETER: () => <TextCircle text="PA" fill="#FFD700" stroke="#FFD700" />,
  LOWER_PARAM: () => <TextCircle text="LP" fill="#FFD700" stroke="#FFD700" />,
  UPPER_PARAM: () => <TextCircle text="UP" fill="#FFD700" stroke="#FFD700" />,
  ENTIRE: () => <TextCircle text="AE" />,
  SONG: () => <TextCircle text="SN" />,
  CLIP: () => <TextCircle text="CP" />,
  SELECT: () => (
    <TextCircle text="S" fill={BLACK} stroke={BLACK} color={WHITE} />
  ),
  SYNTH: () => <TextCircle text="SY" />,
  KIT: () => <TextCircle text="KT" />,
  MIDI: () => <TextCircle text="MD" />,
  CV: () => <TextCircle text="CV" />,
  KEY: () => <TextCircle text="K" />,
  SCALE: () => <TextCircle text="SC" />,
  CROSS: () => <TextCircle text="CR" />,
  BACK: () => <TextCircle text="BK" />,
  LOAD: () => <TextCircle text="LD" />,
  SAVE: () => <TextCircle text="SV" />,
  LEARN: () => <TextCircle text="LN" />,
  TEMPO: () => (
    <TextCircle text="T" fill={BLACK} stroke={BLACK} color={WHITE} />
  ),
  TAP: () => <TextCircle text="TP" />,
  SYNC: () => <TextCircle text="SY" />,
  PLAY: () => <TextCircle text="P" fill="#61c049" stroke="#61c049" />,
  RECORD: () => (
    <TextCircle text="R" fill="#ff2e17" stroke="#ff2e17" color={WHITE} />
  ),
  SHIFT: () => <TextCircle text="S" />,
  GRID: () => <TextGrid text="G" fill={WHITE} stroke={BLACK} />,
  GRID_LIT: () => <TextGrid text="G" fill={L_GREY} stroke={D_GREY} />,
  GRID_UNLIT: () => (
    <TextGrid text="G" fill={D_GREY} stroke={L_GREY} color={WHITE} />
  ),
  LAUNCH: () => <TextGrid text="L" fill={L_GREY} stroke={D_GREY} />,
  AUDITION: () => <TextGrid text="A" fill={L_GREY} stroke={D_GREY} />,
  WAVE_START: () => <TextGrid text="S" fill="#61c049" stroke="#61c049" />,
  WAVE_END: () => (
    <TextGrid text="E" fill="#ff2e17" stroke="#ff2e17" color={WHITE} />
  ),
  WAVE_LOOP_START: () => <TextGrid text="LS" fill="#48cff0" stroke="#48cff0" />,
  WAVE_LOOP_END: () => (
    <TextGrid text="LE" fill="#664aa6" stroke="#664aa6" color={WHITE} />
  ),
  MENU: () => <CenteredText text="SCR" />,
  EXTERNAL: () => <CenteredText text="EXT" />,
};

function Step({ action, element }) {
  const gridRegex = /^\d+,\d+$/;
  let ActionSVG = ACTION_SVG[action];
  let ElementSVG = ELEMENT_SVG[element];

  if (action === "menu") {
    return <ActionSVG />;
  }

  if (gridRegex.test(element)) {
    return (
      <>
        <ActionSVG />
        <CenteredText text={element} />
      </>
    );
  }

  return (
    <>
      <ActionSVG />
      <ElementSVG />
    </>
  );
}

function Syntax({ command }) {
  let ActionSVG = ACTION_SVG[command];
  let ElementSVG = ELEMENT_SVG[command];

  if (ActionSVG) return <ActionSVG />;
  if (ElementSVG) return <ElementSVG />;
  return <CenteredText text={command} />;
}

function ShortcutImage({ shortcut }) {
  const steps = shortcut.match(/\w+\([a-zA-Z0-9_ ,]+\)/g);
  const syntax = shortcut.match(/^[a-zA-Z0-9_ ,]+$/);

  return (
    <div className="shortcut-image__container">
      <svg viewBox="0 0 1000 100">
        {steps &&
          steps.map((step, index) => {
            const [_, action, element] = step.match(
              /(\w+)\(([a-zA-Z0-9_ ,]+)\)/
            );
            return (
              <g
                key={step + index}
                transform={`translate(${D * index + S * index})`}
              >
                <Step action={action} element={element} />
              </g>
            );
          })}

        {syntax && <Syntax command={shortcut} />}
      </svg>
    </div>
  );
}

export default ShortcutImage;
