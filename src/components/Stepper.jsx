import { useSequencer } from 'react-sequencer'
import NoteArray from './Arrays'

const Stepper = ({ beats }) => {
  const steps = [
    ['0', 400],
    ['1', 400],
    ['2', 400],
    ['3', 400],
    ['4', 400],
    ['5', 400],
    ['6', 400],
    ['7', 400],
    ['8', 400],
    ['9', 400],
    ['10', 400],
    ['11', 400],
    ['12', 400],
    ['13', 400],
    ['14', 400],
    ['15', 400]
  ]
  
  let [state, api] = useSequencer({ steps, endMode: 'loop' })
  let currentBar = parseInt(state.current) + 1
  return (
    <>
      <div className="transport">
        <p>Bar: {currentBar}</p>
        <button onClick={() => {api.play()}}>Start</button>
        <button onClick={() => {api.pause()}}>Pause</button>
        <button onClick={() => {api.stop()}}>Stop</button>
        <NoteArray state={state.index} />
      </div>
    </>
  )
}

export default Stepper