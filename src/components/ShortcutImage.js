import "./ShortcutImage.css";
import { Control, Action } from "../data/syntax-constants.js";
import parseSyntax from "../util/parseSyntax.js"

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
  [Action.PRESS]: () => (
    <circle
      cx={D / 2}
      cy={D / 2}
      r={A / 2}
      stroke="#111"
      strokeWidth="4"
      fill="none"
    />
  ),
  [Action.HOLD]: () => (
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
  [Action.RELEASE]: () => (
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
  [Action.TURN]: () => (
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
  [Action.MENU]: () => <CenteredText text={"SCR"} />,
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
  [Control.X]: () => <TextCircle text="X" fill={BLACK} stroke={BLACK} color={WHITE} />,
  [Control.Y]: () => <TextCircle text="Y" fill={BLACK} stroke={BLACK} color={WHITE} />,
  [Control.PARAMETER]: () => <TextCircle text="PA" fill="#FFD700" stroke="#FFD700" />,
  [Control.LOWER_PARAM]: () => <TextCircle text="LP" fill="#FFD700" stroke="#FFD700" />,
  [Control.UPPER_PARAM]: () => <TextCircle text="UP" fill="#FFD700" stroke="#FFD700" />,
  [Control.ENTIRE]: () => <TextCircle text="AE" />,
  [Control.SONG]: () => <TextCircle text="SN" />,
  [Control.CLIP]: () => <TextCircle text="CP" />,
  [Control.SELECT]: () => (
    <TextCircle text="S" fill={BLACK} stroke={BLACK} color={WHITE} />
  ),
  [Control.SYNTH]: () => <TextCircle text="SY" />,
  [Control.KIT]: () => <TextCircle text="KT" />,
  [Control.MIDI]: () => <TextCircle text="MD" />,
  [Control.CV]: () => <TextCircle text="CV" />,
  [Control.KEY]: () => <TextCircle text="K" />,
  [Control.SCALE]: () => <TextCircle text="SC" />,
  [Control.CROSS]: () => <TextCircle text="CR" />,
  [Control.BACK]: () => <TextCircle text="BK" />,
  [Control.LOAD]: () => <TextCircle text="LD" />,
  [Control.SAVE]: () => <TextCircle text="SV" />,
  [Control.LEARN]: () => <TextCircle text="LN" />,
  [Control.TEMPO]: () => (
    <TextCircle text="T" fill={BLACK} stroke={BLACK} color={WHITE} />
  ),
  [Control.TAP]: () => <TextCircle text="TP" />,
  [Control.SYNC]: () => <TextCircle text="SY" />,
  [Control.PLAY]: () => <TextCircle text="P" fill="#61c049" stroke="#61c049" />,
  [Control.RECORD]: () => (
    <TextCircle text="R" fill="#ff2e17" stroke="#ff2e17" color={WHITE} />
  ),
  [Control.SHIFT]: () => <TextCircle text="S" />,
  [Control.GRID]: () => <TextGrid text="G" fill={WHITE} stroke={BLACK} />,
  [Control.GRID_LIT]: () => <TextGrid text="G" fill={L_GREY} stroke={D_GREY} />,
  [Control.GRID_UNLIT]: () => (
    <TextGrid text="G" fill={D_GREY} stroke={L_GREY} color={WHITE} />
  ),
  [Control.LAUNCH]: () => <TextGrid text="L" fill={L_GREY} stroke={D_GREY} />,
  [Control.AUDITION]: () => <TextGrid text="A" fill={L_GREY} stroke={D_GREY} />,
  [Control.WAVE_START]: () => <TextGrid text="S" fill="#61c049" stroke="#61c049" />,
  [Control.WAVE_END]: () => (
    <TextGrid text="E" fill="#ff2e17" stroke="#ff2e17" color={WHITE} />
  ),
  [Control.WAVE_LOOP_START]: () => <TextGrid text="LS" fill="#48cff0" stroke="#48cff0" />,
  [Control.WAVE_LOOP_END]: () => (
    <TextGrid text="LE" fill="#664aa6" stroke="#664aa6" color={WHITE} />
  ),
  [Control.MENU]: () => <CenteredText text="SCR" />,
  [Control.EXTERNAL]: () => <CenteredText text="EXT" />,
};

function Step({ action, control }) {
  let ActionSVG = ACTION_SVG[action];
  let ElementSVG = ELEMENT_SVG[control];

  if (action === "MENU") {
    return <ActionSVG />;
  }

  // grid element
  if (control?.x && control?.y) {
    const gridText = `${control.x},${control.y}`
    return (
      <>
        <ActionSVG />
        <CenteredText text={gridText} />
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

function Plus() {
  const lineSize = D / 3
  return (
    <>
      <line stroke={BLACK}
        strokeWidth="4"
        x1={D / 2}
        y1={lineSize}
        x2={D / 2}
        y2={lineSize * 2} />
      <line stroke={BLACK}
        strokeWidth="4"
        x1={lineSize}
        y1={D / 2}
        x2={lineSize * 2}
        y2={D / 2} />
    </>
  )
}

function Syntax({ command }) {
  let ActionSVG = ACTION_SVG[command];
  let ElementSVG = ELEMENT_SVG[command];

  if (ActionSVG) return <ActionSVG />;
  if (ElementSVG) return <ElementSVG />;
  return <CenteredText text={command} />;
}

function ShortcutImage({ steps }) {
  // simplify the structure of the steps
  // for drawing
  const parsed = parseSyntax(steps)


  return (
    <div className="shortcut-image__container">
      <svg viewBox="0 0 1000 100">
        {parsed &&
          parsed.map((step, index) => {
            return (
              <g
                key={step + index}
                transform={`translate(${D * index + S * index})`}
              >
                {
                  step === "AND" ? (
                    <Plus />
                  ) : (
                    <Step action={step.action} control={step.control} />
                  )
                }
              </g>
            );
          })}

        {/* {syntax && <Syntax command={shortcut} />} */}
      </svg>
    </div>
  );
}

export default ShortcutImage;
