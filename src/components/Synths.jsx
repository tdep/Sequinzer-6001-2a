import * as Tone from 'tone'


const Synths = (note) => {
    let synth = new Tone.AMSynth().toDestination();
    synth.triggerAttackRelease(note, '8n')

}

export default Synths