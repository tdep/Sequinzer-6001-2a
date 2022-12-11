import { useState } from 'react'
import Stepper from './components/Stepper'
import Tempo from './components/Tempo'


const App = () => {
	const [rate, setRate] = useState(60)

	return(
		<div>
			<Tempo rate={rate} setRate={setRate}/>
			<Stepper />
			{/* <NoteArray /> */}
		</div>
	)
}

export default App