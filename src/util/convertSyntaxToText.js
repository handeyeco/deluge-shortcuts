import { Action, Control } from "../data/syntax-constants.js";
import { RAW_SYNTAX } from "../data/syntax.js";

export function convertStepToText(step) {
  const { action, control } = step;

  // handle grid
  if (control.x && control.y) {
    return `press the grid button at column ${control.x} row ${control.y}`;
  }

  // handle menu
  if (action === Action.MENU && control) {
    return `select [${control}] from the menu`;
  }

  if (control === Control.EXTERNAL) {
    return "trigger the external MIDI controller";
  }

  const actionText = RAW_SYNTAX.action[action];
  const controlText = RAW_SYNTAX.control[control];

  return `${actionText.toLowerCase()} the ${controlText}`;
}

function convertToSentence(str) {
  return str[0].toUpperCase() + str.slice(1) + ".";
}

export default function convertSyntaxToText(steps) {
  return steps
    .map((step) => {
      // handle combos
      if (step.substeps) {
        return step.substeps.map(convertStepToText).join(", ");
      }

      return convertStepToText(step);
    })
    .filter(Boolean)
    .map(convertToSentence)
    .join(" ");
}
