function createLink(group, command) {
  return `/shortcuts?q=${group}:${command}`;
}

function process(list) {
  const output = {};
  Object.entries(list).forEach(([group, subgroup]) => {
    const processedSubGroup = [];
    Object.entries(subgroup).forEach(([command, description]) => {
      processedSubGroup.push({
        title: command,
        description: description,
        command: group === "Views" ? null : command,
        link: createLink(group, command),
      });
    });
    output[group] = processedSubGroup;
  });
  return output;
}

const SYNTAX = {
  control: {
    "3,12": "Grid button coordinates (X,Y) where upper-left grid button is 1,1",
    X: "X (Left/Right) encoder",
    Y: "Y (Up/Down) encoder",

    PARAMETER: "Parameter encoders",
    LOWER_PARAM: "Lower parameter encoder",
    UPPER_PARAM: "Upper parameter encoder",

    ENTIRE: "Affect Entire button",
    SONG: "Song button",
    CLIP: "Clip button",

    SELECT: "Select (Settings) encoder",

    SYNTH: "Synth button",
    KIT: "Kit button",
    MIDI: "MIDI button",
    CV: "CV button",
    KEY: "Key button (keyboard icon)",
    SCALE: "Scale button",
    CROSS: "Cross-screen button",

    BACK: "Back / Undo (Redo) button",
    LOAD: "Load (New) button",
    SAVE: "Save (Delete) button",
    LEARN: "Learn / Input button",

    TAP: "Tap Tempo (Metronome) button",
    SYNC: "Sync-Scaling button",
    TEMPO: "Tempo (Swing) encoder",

    PLAY: "Play button",
    RECORD: "Record button",
    SHIFT: "Shift button",

    GRID: "Grid pad (lit or unlit)",
    GRID_UNLIT: "Unlit grid pad",
    GRID_LIT: "Lit grid pad",
    WAVE_START: "Green grid column representing waveform start",
    WAVE_END: "Red grid column representing waveform end",
    WAVE_LOOP_START: "Blue grid column representing waveform loop start",
    WAVE_LOOP_END: "Purple grid column representing waveform loop end",
    LAUNCH: "Mute / Launch button for row",
    AUDITION: "Audition / Section button for row",
    EXTERNAL: "Use external MIDI controller",
  },
  action: {
    hold: "Hold",
    release: "Release",
    press: "Press",
    turn: "Turn",
    menu: "Select option from menu",
  },
  view: {
    global: "Global",
    song: "Song",
    arranger: "Arranger",
    synth: "Synth",
    kit: "Kit",
    midi: "MIDI",
    cv: "CV",
    audio: "Audio",
    waveform: "Waveform",
  },
};

export default process(SYNTAX);
