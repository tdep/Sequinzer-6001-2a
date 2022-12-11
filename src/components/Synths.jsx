import * as Tone from 'tone'

const Synths = (pitch) => {
    let synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(pitch, '8n')
}

export default Synths