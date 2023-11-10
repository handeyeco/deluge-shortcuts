const SHORTCUTS = {
  "All Views": [
    {
      description: "Brightness, adjust",
      command: "hold(SHIFT) hold(LEARN) turn(Y)",
    },
    {
      description: "Clock, nudge",
      command: "hold(X) turn(TEMPO)",
    },
    {
      description: "Resample",
      command: "hold(SHIFT) press(RECORD)",
    },
    {
      description: "Resample, loop",
      command: "hold(RECORD) press(PLAY)",
    },
    {
      description: "Song, delete",
      command: "hold(SHIFT) press(SAVE)",
    },
    {
      description: "Song, load with saved tempo",
      command: "press(LOAD) turn(SELECT) press(LOAD)",
    },
    {
      description: "Song, load with current tempo",
      command: "press(LOAD) turn(SELECT) hold(TEMPO) press(LOAD)",
    },
    {
      description: "Song, new",
      command: "hold(SHIFT) press(LOAD) press(LOAD)",
    },
    {
      description: "Song, save and collect samples",
      command: "press(SAVE) hold(SAVE) menu(COLLECT MEDIA) press(SAVE)",
    },
    {
      description: "Undo",
      command: "press(BACK)",
    },
    {
      description: "REDO",
      command: "hold(SHIFT) press(BACK)",
    },
  ],
  "Song View": [
    {
      description: "Clip, delete",
      command: "hold(GRID_LIT) press(SAVE)",
    },
    {
      description: "Clip, drag instance to Arranger",
      command: "hold(GRID_LIT) press(SONG) turn(X) release(GRID_LIT)",
    },
    {
      description: "Clip, instant mute/launch",
      command: "hold(SHIFT) press(LAUNCH)",
    },
    {
      description: "Clip, solo (arm)",
      command: "hold(X) press(LAUNCH)",
    },
    {
      description: "Clip, solo (immediate)",
      command: "hold(SHIFT) hold(X) press(LAUNCH)",
    },
    {
      description: "Clip, un-solo",
      command: "press(LAUNCH)",
    },
    {
      description: "Color, change section",
      command: "hold(SHIFT) press(AUDITION)",
    },
    {
      description: "Record to Arranger",
      command: "hold(RECORD) press(SONG)",
    },
    {
      description: "Repeat/share, section status",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      description: "Row, clone",
      command: "hold(GRID_LIT) press(GRID_UNLIT)",
    },
    {
      description: "Row, move",
      command: "hold(GRID_LIT) turn(Y)",
    },
    {
      description: "Track, modify parameters",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
  ],
  "Song (Audio / Looping)": [
    {
      description: "Clip, create audio clip",
      command: "hold(GRID_UNLIT) press(SHIFT)",
    },
    {
      description: "Clip, 'grab' tempo from clip",
      command: "hold(TEMPO) press(GRID_LIT)",
    },
    {
      description: "Loop, close recording",
      command: "press(LAUNCH)",
    },
    {
      description: "Loop, close, and immediate solo",
      command: "hold(X) press(LAUNCH)",
    },
    {
      description: "Loop, continuous layer overdub",
      command: "hold(RECORD) press(AUDITION)",
    },
    {
      description: "Loop record (record mode; with armed clips)",
      command: "press(PLAY)",
    },
    {
      description: "Overdub",
      command: "hold(RECORD) press(GRID_LIT)",
    },
    {
      description: "Set input source (audio clip)",
      command: "hold(LEARN) press(GRID)",
    },
    {
      description: "Set rec. arm status (clip)",
      command: "hold(RECORD) press(LAUNCH)",
    },
  ],
  "Synth / Key / MIDI / CV Clips": [
    {
      description: "Audio track, create new",
      command: "hold(AUDITION) press(SELECT)",
    },
    {
      description: "Audio track, create new",
      command: "hold(LEARN) press(AUDITION)",
    },
    {
      description: "MIDI, assign to param knob",
      command: "hold(PARAMETER) turn(SELECT)",
    },
    {
      description: "Note, set repeat count",
      command: "hold(GRID_LIT) hold(Y) turn(Y)",
    },
    {
      description: "Resample, synth",
      command: "hold(RECORD) press(AUDITION)",
    },
    {
      description: "Scale, change root note",
      command: "hold(SCALE) press(AUDITION)",
    },
    {
      description: "Scale, cycle default",
      command: "hold(SHIFT) press(SCALE)",
    },
    {
      description: "Scale, toggle on/off",
      command: "press(SCALE)",
    },
    {
      description: "Synth, load blank synth",
      command: "hold(SHIFT) press(SYNTH)",
    },
    {
      description: "Synth, save",
      command: "hold(SAVE) press(SYNTH)",
    },
    {
      description: "Track, solo",
      command: "hold(X) press(LAUNCH)",
    },
    {
      description: "Transpose all clips semitone (scale on)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
    },
    {
      description: "Transpose clip octave",
      command: "hold(Y) turn(Y)",
    },
    {
      description: "Transpose clip semitone (scale off)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
    },
  ],
  "Clip View": [
    {
      description: "Automation, copy",
      command: "hold(LEARN) press(PARAMETER)",
    },
    {
      description: "Automation, delete",
      command: "hold(SHIFT) press(PARAMETER)",
    },
    {
      description: "Automation, paste",
      command: "hold(LEARN) hold(SHIFT) press(PARAMETER)",
    },
    {
      description: "Clip, adjust length",
      command: "hold(SHIFT) turn(X)",
    },
    {
      description: "Clip, clear",
      command: "hold(X) press(BACK)",
    },
    {
      description: "Clip, duplicate (multiply)",
      command: "hold(SHIFT) press(X)",
    },
    {
      description: "Clip, horizontal shift",
      command: "hold(Y) turn(X)",
    },
    {
      description: "Color, change clip",
      command: "hold(SHIFT) turn(Y)",
    },
    {
      description: "Grab tempo from Audio Clip",
      command: "hold(TEMPO) press(LAUNCH)",
    },
    {
      description: "Note, length",
      command: "hold(GRID_LIT) press(GRID_UNLIT)",
    },
    {
      description: "Note, length (long)",
      command: "hold(GRID_LIT) turn(X) press(X) press(GRID_UNLIT)",
    },
    {
      description: "Note, set iteration",
      command: "hold(GRID_LIT) turn(SELECT)",
    },
    {
      description: "Note, set probability",
      command: "hold(GRID_LIT) turn(SELECT)",
    },
    {
      description: "Note, shift left/right",
      command: "hold(GRID_LIT) hold(X) turn(X)",
    },
    {
      description: "Note, velocity",
      command: "hold(GRID_LIT) turn(X)",
    },
    {
      description: "Note, copy",
      command: "hold(LEARN) press(X)",
    },
    {
      description: "Note, paste",
      command: "hold(LEARN) hold(SHIFT) press(X)",
    },
    {
      description: "Playbck from current screen",
      command: "hold(X) press(PLAY)",
    },
    {
      description: "Preset load synth",
      command: "hold(LOAD) press(SYNTH)",
    },
    {
      description: "Preset load kit",
      command: "hold(LOAD) press(KIT)",
    },
  ],
  "KIT CLIPS": [
    {
      description: "Add Synth to a Kit",
      command: "hold(AUDITION) press(SYNTH)",
    },
    {
      description: "Delete row",
      command: "hold(GRID) press(SAVE)",
    },
    {
      description: "Kit, create new",
      command: "hold(SHIFT) press(KIT)",
    },
    {
      description: "Kit, save",
      command: "hold(SAVE) press(KIT)",
    },
    {
      description: "Move row",
      command: "hold(AUDITION) hold(Y) turn(Y)",
    },
    {
      description: "Record sample from input",
      command: "hold(AUDITION) press(RECORD)",
    },
    {
      description: "Row, change color",
      command: "hold(SHIFT) hold(AUDITION) turn(Y)",
    },
  ],
  "Arranger View": [
    {
      description: "Arrangement, clear",
      command: "hold(X) press(BACK)",
    },
    {
      description: "Audio track, create new",
      command: "hold(AUDITION) press(SELECT)",
    },
    {
      description: "Audio track, set source",
      command: "hold(LEARN) press(AUDITION)",
    },
    {
      description: "Clip, change instance source",
      command: "hold(GRID_LIT) turn(SELECT)",
    },
    {
      description: "Clip, create empty (white)",
      command: "hold(GRID_LIT) turn(SELECT)",
    },
    {
      description: "Clip, instance length",
      command: "hold(GRID_LIT) press(GRID_UNLIT)",
    },
    {
      description: "Clip, make unique (white)",
      command: "hold(SHIFT) press(GRID_LIT)",
    },
    {
      description: "Clip, move horizontal",
      command: "hold(GRID_LIT) turn(X)",
    },
    {
      description: "Clip, place instance",
      command: "press(GRID_UNLIT)",
    },
    {
      description: "Play from current position",
      command: "hold(X) press(PLAY)",
    },
    {
      description: "Row, delete",
      command: "hold(AUDITION) press(SAVE)",
    },
    {
      description: "Row, move",
      command: "hold(AUDITION) turn(Y)",
    },
    {
      description: "Track, solo",
      command: "hold(X) press(LAUNCH)",
    },
  ],
};
