import * as Tone from 'tone'

const DrumMachine = (drum) => {
  const drums = new Tone.MembraneSynth().toDestination
  drums.triggerAttackRelease(drum, "8n")
}

export default DrumMachine