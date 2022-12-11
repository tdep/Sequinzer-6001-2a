import { useState } from 'react'
import Notes from './Notes'

const NoteArray = ({ state }) => {
  const [scale, setScale] = useState(["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"])
	const [duration, setDuration] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
	const phrase = { 
		grid: [ 
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0],
			[0],[0],[0],[0],[0],[0],[0],[0]
		],
		phraseId: null,
		info: null
	}

	const numBars = {
		eight: [0, 1, 2, 3, 4, 5, 6, 7],
		sixteen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		twentyfour: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	}


	let column = duration
	const scales = {
		major: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
		dorian: ["C5", "Bb4", "A4", "G4", "F4", "Eb4", "D4", "C4"],
		phrygian: ["C5", "Bb4", "Ab4", "G4", "F4", "Eb4", "Db4", "C4"], 
		lydian: ["C5", "B4", "A4", "G4", "F#4", "E4", "D4", "C4"],
		mixolydian: ["C5", "Bb4", "A4", "G4", "F4", "E4", "D4", "C4"],
		natMinor: ["C5", "Bb4", "Ab4", "G4", "F4", "Eb4", "D4", "C4"],
		harMinor: ["C5", "B4", "Ab4", "G4", "F4", "Eb4", "D4", "C4"],
		locrian: ["C5", "Bb4", "Ab4", "Gb4", "F4", "Eb4", "Db4", "C4"]
	}
	let row = scale
	
	return (
		<>
			<div className="scale-select">
				<button onClick={()=>{setScale(scales.major)}}>Major (Ionian)</button>
				<button onClick={()=>{setScale(scales.dorian)}}>Dorian</button>
				<button onClick={()=>{setScale(scales.phrygian)}}>Phrygian</button>
				<button onClick={()=>{setScale(scales.lydian)}}>Lydian</button>
				<button onClick={()=>{setScale(scales.mixolydian)}}>Mixolydian</button>
				<button onClick={()=>{setScale(scales.natMinor)}}>Natural Minor</button>
				<button onClick={()=>{setScale(scales.harMinor)}}>Harmonic Minor</button>
				<button onClick={()=>{setScale(scales.locrian)}}>Locrian</button>
			</div>
			<div className="play-field">
				{
					column.map((bar, i) => {
						return(
							<div classname="column" bar={column[i]}>
								{row.map((pitch) => {
									return(
										<div className="note" note={pitch}>
											<Notes 
												name={pitch}
												id={bar + pitch}
												state={state}
												bar={bar}
											/>
										</div>
									)
								})}
							</div>
						)
					})
				}
			</div>
			<div className="playfield-length">
				<button onClick={()=>{setDuration(numBars.eight)}}>8 Bars</button>
				<button onClick={()=>{setDuration(numBars.sixteen)}}>16 Bars</button>
				<button onClick={()=>{setDuration(numBars.twentyfour)}}>24 Bars</button>
			</div>
		</>
	)

}

export default NoteArray