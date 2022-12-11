const NoteButtons = ({handleClick, name, id, bar, onOff, state}) => {
  
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

export default NoteButtons