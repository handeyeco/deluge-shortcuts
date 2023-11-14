const v4_1_0 = {
  "Global": [
    {
      description: "View zoom level",
      command: "press(X)",
    },
    {
      description: "Change zoom level",
      command: "hold(X) turn(X)",
    },
    {
      description: "Scroll horizontal",
      command: "turn(X)",
    },
    {
      description: "Scroll vertical",
      command: "turn(Y)",
    },
    {
      description: "Undo",
      command: "press(BACK)",
    },
    {
      description: "Redo",
      command: "hold(SHIFT) press(BACK)",
    },
    {
      description: "New song",
      command: "hold(SHIFT) press(LOAD)",
    },
    {
      description: "Delete song",
      command: "press(LOAD) turn(SELECT) hold(SHIFT) press(SAVE)",
    },
    {
      description: "Load song",
      command: "press(LOAD) turn(SELECT) press(LOAD)",
    },
    {
      description: "Save song",
      command: "press(SAVE) turn(SELECT) press(SELECT)",
    },
    {
      description: "Change tempo (course)",
      command: "turn(TEMPO)",
    },
    {
      description: "Change tempo (fine)",
      command: "hold(TEMPO) turn(TEMPO)",
    },
    {
      description: "Metronome",
      command: "hold(SHIFT) press(TAP)",
    },
    {
      description: "Swing",
      command: "hold(SHIFT) turn(TEMPO)",
    },
    {
      description: "File system up",
      command: "press(BACK)",
    },
    {
      description: "Adjust brightness",
      command: "hold(SHIFT) hold(LEARN) turn(Y)",
    },
    {
      description: "Settings menu",
      command: "hold(SHIFT) press(SELECT)",
    },
    {
      description: "Save song, collect all samples",
      command: "press(SAVE) turn(SELECT) hold(SELECT) press(SELECT)",
    },
    {
      description: "Pad refresh rate",
      command: "hold(CLIP) turn(SELECT)",
    },
  ],
  "Sequencing": [
    {
      description: "Make long note",
      command: "hold(GRID) press(GRID_UNLIT)",
    },
    {
      description: "Make long note across the next screen",
      command: "press(GRID) turn(X) hold(X) press(GRID_UNLIT)",
    },
    {
      description: "Adjust note velocity",
      command: "hold(GRID) turn(X)",
    },
    {
      description: "Note probability; clockwise is iteration and counter is probability",
      command: "hold(GRID) turn(SELECT)",
    },
    {
      description: "Copy notes",
      command: "hold(LEARN) press(X)",
    },
    {
      description: "Paste notes",
      command: "hold(SHIFT) hold(LEARN) press(X)",
    },
    {
      description: "Cross screen editing, real time note cloning",
      command: "press(CROSS)",
    },
    {
      description: "Add instrument / row to kit",
      command: "hold(AUDITION) press(KIT) turn(SELECT) press(SELECT)",
    },
    {
      description: "Note zoom level - 128th and 256th level",
      command: "hold(LEARN) turn(TEMPO)",
    },
    {
      description: "Record live - notes into sequencer",
      command: "press(PLAY) press(RECORD)",
    },
    {
      description: "Duplicate clip content - double and append",
      command: "hold(SHIFT) press(X)",
    },
    {
      description: "Change clip length",
      command: "hold(SHIFT) turn(X)",
    },
    {
      description: "Shift all notes horizontally",
      command: "hold(Y) turn(X)",
    },
    {
      description: "Clear clip",
      command: "hold(X) press(BACK)",
    },
    {
      description: "Change clip color",
      command: "hold(SHIFT) turn(Y)",
    },
    {
      description: "Change row color - instrument row in kit",
      command: "hold(SHIFT) hold(AUDITION) turn(Y)",
    },
    {
      description: "Reorder kit clip row up or down",
      command: "hold(AUDITION) hold(LAUNCH) turn(Y)",
    },
    {
      description: "Note nudge individual note",
      command: "hold(GRID_LIT) hold(X) turn(X)",
    },
    {
      description: "Clip play direction",
      command: "hold(SHIFT) press(1,5)",
    },
    {
      description: "Euclidian seq events - number of events / notes",
      command: "hold(AUDITION) hold(Y) turn(Y)",
    },
    {
      description: "Euclidian seq length - row length",
      command: "hold(AUDITION) turn(X)",
    },
    {
      description: "Euclidian seq rotate - shift / rotate events or notes",
      command: "hold(AUDITION) press(X) turn(X)",
    },
  ],
  "Song view": [
    {
      description: "Launch clip - queue",
      command: "press(LAUNCH)",
    },
    {
      description: "Launch clip - immediately",
      command: "hold(SHIFT) press(LAUNCH)",
    },
    {
      description: "Fast scroll song list",
      command: "press(LOAD) hold(SHIFT) turn(SELECT)",
    },
    {
      description: "Create clip (empty row)",
      command: "press(GRID_UNLIT)",
    },
    {
      description: "Enter clip (non-empty row)",
      command: "press(GRID)",
    },
    {
      description: "Move row clip up or down",
      command: "hold(GRID) turn(Y)",
    },
    {
      description: "Clip section color - change or create new",
      command: "hold(SHIFT) press(AUDITION)",
    },
    {
      description: "Launch section",
      command: "press(AUDITION)",
    },
    {
      description: "Section repeat (hold audition for 1 sec)",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      description: "Clone/duplicate clip (hold source, press destination)",
      command: "hold(GRID) press(GRID)",
    },
    {
      description: "Delete clip",
      command: "hold(GRID) press(SAVE)",
    },
    {
      description: "Solo clip - queue",
      command: "hold(X) press(LAUNCH)",
    },
    {
      description: "Solo clip - immediately",
      command: "hold(SHIFT) hold(X) press(LAUNCH)",
    },
    {
      description: "Clip parameter change (per clip)",
      command: "hold(GRID) turn(PARAMETER)",
    },
    {
      description: "Clip parameter change (per song)",
      command: "press(ENTIRE) turn(PARAMETER)",
    },
    {
      description: "Change existing clip preset",
      command: "hold(GRID) turn(SELECT)",
    },
    {
      description: "Change existing clip to synth",
      command: "hold(GRID) press(SYNTH)",
    },
    {
      description: "Change existing clip to MIDI",
      command: "hold(GRID) press(MIDI)",
    },
    {
      description: "Change existing clip to CV",
      command: "hold(GRID) press(CV)",
    },
    {
      description: "Create audio track (in empty clip)",
      command: "hold(GRID) press(SELECT)",
    },
    {
      description: "Check name and type of non-empty clip",
      command: "hold(GRID)",
    },
  ],
  "Recording / Resampling - Samples in Kit": [
    {
      description: "Resample / record all audio output",
      command: "hold(SHIFT) press(RECORD)",
    },
    {
      description: "Loop resample",
      command: "hold(RECORD) press(PLAY) hold(RECORD) press(PLAY)",
    },
    {
      description: "Record sample into a kit",
      command: "hold(SHIFT) press(KIT) press(RECORD)",
    },
    {
      description: "Load sample into a kit row",
      command: "hold(AUDITION) press(LOAD) turn(SELECT) press(SELECT)",
    },
    {
      description: "Load sample into a kit row silently",
      command: "hold(SHIFT) hold(AUDITION) press(LOAD) turn(SELECT) press(SELECT)",
    },
    {
      description: "Synth resample",
      command: "hold(RECORD) press(AUDITION) hold(RECORD) press(GRID)",
    },
    {
      description: "Load all samples from folder to kit",
      command: "hold(SHIFT) press(KIT) turn(SELECT) hold(SELECT) menu(ALL) press(SELECT)",
    },
    {
      description: "Slice sample",
      command: "hold(SHIFT) press(KIT) turn(SELECT) hold(SELECT) menu(SLICE) press(SELECT) menu(SLICES) press(SELECT)",
    },
    {
      description: "Rename kit row or instrument",
      command: "hold(AUDITION) press(3,12)",
    },
  ],
  "Audio clips": [
    {
      description: "Create new audio clip in song view (press empty row)",
      command: "hold(GRID_UNLIT) press(SELECT)",
    },
    {
      description: "Source for audio clip in song view",
      command: "hold(LEARN) press(GRID) turn(SELECT) press(SELECT)",
    },
    {
      description: "Create new audio track in arranger view",
      command: "hold(AUDITION) press(SELECT)",
    },
    {
      description: "Source for audio clip in arranger view",
      command: "hold(LEARN) press(AUDITION) turn(SELECT) press(SELECT)",
    },
    {
      description: "Clear audio clip recording",
      command: "hold(X) press(BACK)",
    },
    {
      description: "Change color of audio wave",
      command: "hold(SHIFT) turn(Y)",
    },
    {
      description: "End point / loop length (use red end point marker)",
      command: "press(GRID) press(GRID)",
    },
    {
      description: "Waveform start / end point",
      command: "hold(SHIFT) press(1,1)",
    },
    {
      description: "Adjust length - audio clip waveform",
      command: "hold(SHIFT) turn(X)",
    },
  ],
  "Modifying sounds": [
    {
      description: "New synth",
      command: "hold(SHIFT) press(SYNTH)",
    },
    {
      description: "New kit",
      command: "hold(SHIFT) press(KIT)",
    },
    {
      description: "View synth preset browser",
      command: "hold(LOAD) press(SYNTH)",
    },
    {
      description: "View kit preset browser",
      command: "hold(LOAD) press(KIT)",
    },
    {
      description: "Save synth preset",
      command: "hold(SAVE) press(SYNTH) turn(SELECT) press(SELECT)",
    },
    {
      description: "Save kit preset",
      command: "hold(SAVE) press(KIT) turn(SELECT) press(SELECT)",
    },
    {
      description: "Note keyboard view",
      command: "press(KEY)",
    },
    {
      description: "Clear notes and automation",
      command: "hold(X) press(BACK)",
    },
    {
      description: "Setting up choke group",
      command: "hold(AUDITION) press(7,8) turn(SELECT) menu(CHOKE) press(SELECT)",
    },
    {
      description: "Cycle default scales",
      command: "hold(SHIFT) press(SCALE)",
    },
    {
      description: "Change root note",
      command: "hold(SCALE) press(AUDITION)",
    },
    {
      description: "Alter current scale",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      description: "Clone preset",
      command: "hold(LOAD) menu(CLONE) press(SELECT)",
    },
    {
      description: "Kit clip affect all - first select parameter",
      command: "hold(SHIFT) hold(GRID) press(ENTIRE) turn(SELECT)",
    },
    {
      description: "Select kit/ instrument row silently",
      command: "hold(SHIFT) press(AUDITION)",
    },
    {
      description: "Change clip preset",
      command: "turn(SELECT)",
    },
    {
      description: "Transpose clip by octave",
      command: "hold(Y) turn(Y)",
    },
    {
      description: "Transpose current clip by semitone (scale off)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
    },
    {
      description: "Transpose all clips by semitone (scale on)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
    },
  ],
  "Waveforms, record-to-arranger, multi-sampling": [
    {
      description: "Chromatic sample - sample sample, different pitches (on new synth)",
      command: "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) press(SELECT)",
    },
    {
      description: "Basic sample - load sample with no pitch detection",
      command: "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(BASIC) press(SELECT)",
    },
    {
      description: "Multi-sampling",
      command: "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(MULTI) press(SELECT)",
    },
    {
      description: "Single cycle waveforms",
      command: "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(SINGLE) press(SELECT)",
    },
    {
      description: "External sound source",
      command: "hold(SHIFT) press(6,3) turn(SELECT) menu(IN) press(PLAY)",
    },
    {
      description: "Record to arranger - live record parameter changes and MIDI notes (RECORD to end)",
      command: "press(SONG) hold(RECORD) press(SONG)",
    },
    {
      description: "Append recording to existing arrangement (from arrangement mode; RECORD to end)",
      command: "move(X) press(SONG) hold(RECORD) press(SONG)",
    },
    {
      description: "Waveform edit view - change start / end / loop",
      command: "hold(SHIFT) press(1,1)",
    },
    {
      description: "Zoom in and out",
      command: "hold(X) turn(X)",
    },
    {
      description: "Move along waveform",
      command: "turn(X)",
    },
    {
      description: "Change start",
      command: "press(WAVE_START) press(GRID)",
    },
    {
      description: "Change end",
      command: "press(WAVE_END) press(GRID)",
    },
    {
      description: "Create loop start point",
      command: "hold(WAVE_START) press(GRID)",
    },
    {
      description: "Delete loop start point",
      command: "hold(WAVE_LOOP_START) press(WAVE_START)",
    },
    {
      description: "Create loop end point",
      command: "hold(WAVE_END) press(GRID)",
    },
    {
      description: "Delete loop end point",
      command: "hold(WAVE_LOOP_END) press(WAVE_END)",
    },
  ],
  "Arranger view = song button flashing": [
    {
      description: "Add clip into arranger",
      command: "press(GRID_UNLIT)",
    },
    {
      description: "Change / select instance's clip",
      command: "hold(GRID) turn(SELECT)",
    },
    {
      description: "Delete clip instance from arranger (left-most clip grid button)",
      command: "press(GRID_LIT)",
    },
    {
      description: "Clear arranger clips (all clip instances)",
      command: "hold(X) press(BACK)",
    },
    {
      description: "Move clip instance horizontally",
      command: "hold(GRID_LIT) turn(X)",
    },
    {
      description: "Move row vertically",
      command: "hold(AUDITION) turn(Y)",
    },
    {
      description: "Change instance length of clip",
      command: "hold(GRID) press(GRID)",
    },
    {
      description: "Mute / unmute",
      command: "press(LAUNCH)",
    },
    {
      description: "Audition",
      command: "press(AUDITION)",
    },
    {
      description: "Solo instrument",
      command: "hold(X) press(LAUNCH)",
    },
    {
      description: "Enter clip (anything besides left-most grid button)",
      command: "press(GRID_LIT)",
    },
    {
      description: "Scroll timeline with progress bar",
      command: "press(CROSS)",
    },
    {
      description: "Start playback from current screen",
      command: "hold(X) press(PLAY)",
    },
    {
      description: "Make clip instance unique (white; left-most clip grid button)",
      command: "hold(SHIFT) press(GRID_LIT)",
    },
    {
      description: "Adjust clip parameter of clip instance",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
    {
      description: "Copy clip from arranger to song mode, eg to save white instance as its own clip",
      command: "hold(GRID_LIT) press(SONG) turn(Y)",
    },
    {
      description: "Copy clip from song to arranger mode",
      command: "hold(GRID_LIT) press(SONG) turn(X)",
    },
    {
      description: "Insert / delete time; applies to currently visible screen (clockwise: insert; counter: delete)",
      command: "hold(SHIFT) turn(X)",
    },
    {
      description: "Enable loop play mode from arrange to song mode",
      command: "press(AUDITION)",
    },
    {
      description: "Disable loop play mode from arrange to song mode",
      command: "press(LAUNCH)",
    },
    {
      description: "Change instrument preset",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      description: "Change clip type to synth",
      command: "hold(AUDITION) press(SYNTH)",
    },
    {
      description: "Change clip type to MIDI",
      command: "hold(AUDITION) press(MIDI)",
    },
    {
      description: "Change clip type to CV",
      command: "hold(AUDITION) press(CV)",
    },
    {
      description: "Add new instrument clip from arranger view (unused row)",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      description: "Add new synth clip type (unused row)",
      command: "hold(AUDITION) press(SYNTH)",
    },
    {
      description: "Add new MIDI clip type (unused row)",
      command: "hold(AUDITION) press(MIDI)",
    },
    {
      description: "Add new CV clip type (unused row)",
      command: "hold(AUDITION) press(CV)",
    },
    {
      description: "Delete instrument row from arranger",
      command: "hold(AUDITION) press(SAVE)",
    },
    {
      description: "Rename track",
      command: "hold(AUDITION) press(3,12)",
    },
  ],
  "Parameter dials": [
    {
      description: "Assign gold dial control of parameters - first select parameter",
      command: "hold(LEARN) turn(PARAMETER)",
    },
    {
      description: "Check gold dial control of parameters - first select parameter",
      command: "turn(PARAMETER)",
    },
    {
      description: "Record automation of parameter",
      command: "press(RECORD) press(PLAY) turn(PARAMETER)",
    },
    {
      description: "Delete automation of recorded parameter",
      command: "hold(SHIFT) press(PARAMETER)",
    },
    {
      description: "Copy automation of parameter",
      command: "hold(LEARN) press(PARAMETER)",
    },
    {
      description: "Paste automation of parameter",
      command: "hold(SHIFT) hold(LEARN) press(PARAMETER)",
    },
    {
      description: "Parameter change / lock per note in clip view",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
    {
      description: "Parameter change / lock per clip in song view",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
  ],
  "MIDI commands": [
    {
      description: "Setup MIDI sequencing of notes",
      command: "press(MIDI) turn(SELECT)",
    },
    {
      description: "MIDI sequencing of parameters - first select parameter",
      command: "hold(PARAMETER) turn(SELECT) turn(PARAMETER)",
    },
    {
      description: "Record MIDI automation",
      command: "press(RECORD) press(PLAY) turn(PARAMETER)",
    },
    {
      description: "Record MIDI step automation",
      command: "hold(GRID) turn(PARAMETER)",
    },
    {
      description: "Change dial control, but keep automation",
      command: "hold(PARAMETER) press(SELECT) turn(SELECT)",
    },
    {
      description: "MIDI note output in a kit clip",
      command: "press(KIT) hold(AUDITION) press(MIDI)",
    },
    {
      description: "MIDI note output in a kit clip: MIDI channel assign",
      command: "hold(AUDITION) turn(LOWER_PARAM)",
    },
    {
      description: "MIDI note output in a kit clip: MIDI note value",
      command: "hold(AUDITION) turn(UPPER_PARAM)",
    },
    {
      description: "Settings menu for additional MIDI, CV, and Gate parameters",
      command: "hold(SHIFT) press(SELECT)",
    },
    {
      description: "External controller to play synth or kit",
      command: "hold(LEARN) hold(AUDITION) press(EXTERNAL)",
    },
    {
      description: "External controller to trigger clip (from song mode)",
      command: "hold(LEARN) hold(AUDITION) press(EXTERNAL)",
    },
    {
      description: "External controller to trigger play (from song mode)",
      command: "hold(LEARN) hold(PLAY) press(EXTERNAL)",
    },
    {
      description: "External controller to trigger record (from song mode)",
      command: "hold(LEARN) hold(RECORD) press(EXTERNAL)",
    },
    {
      description: "Unlearn external controller to play synth or kit",
      command: "hold(SHIFT) hold(LEARN) press(AUDITION)",
    },
    {
      description: "Unlearn external controller to trigger clip (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(AUDITION)",
    },
    {
      description: "Unlearn external controller to trigger play (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(PLAY)",
    },
    {
      description: "Unlearn external controller to trigger record (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(RECORD)",
    },
    {
      description: "External control of parameter - first select parameter",
      command: "hold(LEARN) press(EXTERNAL)",
    },
    {
      description: "Unlearn external control of parameter - first select parameter",
      command: "hold(SHIFT) hold(LEARN)",
    },
    {
      description: "Nudge MIDI clock",
      command: "hold(X) turn(TEMPO)",
    },
    {
      description: "Record external notes",
      command: "press(RECORD) press(PLAY) press(EXTERNAL)",
    },
    {
      description: "Sync scaling for unusual time signitures",
      command: "press(SYNC)",
    },
    {
      description: "Mute by external MIDI for individual kit rows - in kit mode",
      command: "hold(LEARN) hold(LAUNCH) press(EXTERNAL)",
    },
  ],
  "Looper in song mode": [
    {
      description: "Toggle record arm",
      command: "hold(RECORD) press(LAUNCH)",
    },
    {
      description: "Start loop record",
      command: "press(RECORD) press(PLAY)",
    },
    {
      description: "Close loop recording - on recording clip row",
      command: "press(LAUNCH)",
    },
    {
      description: "Close loop recording and immediately play in solo",
      command: "hold(X) press(LAUNCH)",
    },
    {
      description: "Record loop during playback",
      command: "press(RECORD) press(PLAY) press(LAUNCH)",
    },
    {
      description: "Record overdub - press grid directly underneath existing audio clip",
      command: "press(RECORD) press(PLAY) hold(RECORD) press(GRID)",
    },
    {
      description: "Record overdub - with continuous layering - press grid directly underneath existing audio clip",
      command: "press(RECORD) press(PLAY) hold(RECORD) press(AUDITION)",
    },
    {
      description: "Tempo detection for loop pedal recording - start with a blank song",
      command: "hold(SHIFT) press(TAP)",
    },
    {
      description: "Preset tempo for loop recording",
      command: "press(GRID_UNLIT) press(KIT) turn(TEMPO)",
    },
    {
      description: "Grab tempo from existing audio clip",
      command: "hold(TEMPO) press(GRID_LIT)",
    },
    {
      description: "Enable count-in before audio recording",
      command: "hold(SHIFT) press(SELECT) menu(RECORDING) menu(COUNT IN)",
    },
  ]
}