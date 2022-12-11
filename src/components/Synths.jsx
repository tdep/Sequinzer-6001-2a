import * as Tone from 'tone'

const Synths = (note) => {
    let synth = new Tone.Synth().toDestination();
    if (note.ison === "true"){
        synth.triggerAttackRelease(note.name, '8n')
    }
}

export default Synths