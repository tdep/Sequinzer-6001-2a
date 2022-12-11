import { useSequencer } from 'react-sequencer'
import NoteArray from './Arrays'

const steps = [
  ['0', 500],
  ['1', 500],
  ['2', 500],
  ['3', 500],
  ['4', 500],
  ['5', 500],
  ['6', 500],
  ['7', 500],
  ['8', 500],
  ['9', 500],
  ['10', 500],
  ['11', 500],
  ['12', 500],
  ['13', 500],
  ['14', 500],
  ['15', 500]
]


const Stepper = () => {
  let [state, api] = useSequencer({ steps, endMode: 'loop' })

  return (
    //console.log(state.current)

    <div className="transport">
      <p>{state.current}</p>
      <button onClick={() => {api.play()}}>Start</button>
      <button onClick={() => {api.pause()}}>Pause</button>
      <button onClick={() => {api.stop()}}>Stop</button>
      <NoteArray state={state.index} />
    </div>
  )
}

export default Stepper