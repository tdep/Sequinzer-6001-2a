import * as Tone from 'tone'

const Synths = (note) => {
    let synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, '8n')
}

export default Synths