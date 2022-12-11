import { useState } from 'react'
import Synths from './Synths'
import NoteButtons from './NoteButtons'

const Notes = ({ name, id, state, bar }) => {
  const [onOff, setOnOff] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOnOff(!onOff)
    // console.log(e.target.attributes.name.value)
    // console.log(e.target.attributes.bar)
    // console.log(e.target.attributes.id)
    Synths(e.target.attributes.name.value)
    return (
      <>
        {e.target.attributes.name.value}
        {e.target.attributes.id.value}
        {onOff}
      </>
    )
  }

  return (
    <div>
      {(state===bar && onOff)?Synths(name): null}
      <NoteButtons 
      handleClick={handleClick} 
      name={name} 
      id={id} 
      bar={bar} 
      onOff={onOff} 
      state={state} />
    </div>
  )
}

export default Notes