const Notes = ({ name, id}) => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Clicked")
  }
  return (
    <div className="notes" onClick={handleClick} name={name} id={id}>
      <span className="noteSpan">
        {name}
      </span>
    </div>
  )

}

export default Notes