import { useState } from 'react'
import Synths from './Synths'

const Notes = ({ name, id, state, bar }) => {
  const [onOff, setOnOff] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setOnOff(!onOff)
    console.log(e.target.attributes.name.value)
    console.log(e.target.attributes.bar)
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
        <button 
          className="notes" 
          onClick={handleClick} 
          name={name} 
          id={id}
          bar={bar}
          ison={!onOff?"false":"true"}
          style={{
            background:
            (
              (onOff)?
              (!(state===bar)?
              "darkblue":"green"):(!(state===bar)?
              "lightblue":"lightgreen")
            ),
            color:
            (
              (onOff)?
              "whitesmoke":(!(state===bar)?
              "black":"green")
            )
          }}
          >
          {name}
        </button>
    </div>
  )
}

export default Notes