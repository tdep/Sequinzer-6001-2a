import { useState } from 'react'

const Notes = ({ name, id, toggled}) => {
  const [onOff, setOnOff] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setOnOff(!onOff)
    console.log(e.target.attributes.name.value)
    console.log(onOff)
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
          style={{
            background:onOff?"darkblue":"lightblue", 
            color:onOff?"whitesmoke":"black"
          }}>
          {name}
        </button>
    </div>
  )
}

export default Notes