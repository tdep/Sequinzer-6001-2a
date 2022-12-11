import * as Tone from 'tone'


const Synths = (note) => {
    const now = Tone.now()
    let synth = new Tone.PolySynth().toDestination();
    Tone.setContext(new Tone.Context({ latencyHint : "playback" }))
    synth.triggerAttackRelease(note, '8n')
}

export default Synths