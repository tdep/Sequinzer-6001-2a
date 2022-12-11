import Notes from './Notes'
import Stepper from './Stepper'

const NoteArray = ({ currentBar }) => {
    
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

	const column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	const row = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"]

	return (
		<>
			<Stepper column={column} />
			<div className="play-field">
				{
					column.map((bar, i) => {
						return(
							<div classname="column" bar={column[i]} style={{background:(column[i]===currentBar)?"lightyellow":"transparent"}}>
								{row.map((pitch) => {
									return(
										<div className="note" note={pitch}>
											<Notes 
												name={pitch}
												id={bar + pitch}
											/>
										</div>
									)
								})}
							</div>
						)
					})
				}
			</div>
		</>
	)

}

export default NoteArray