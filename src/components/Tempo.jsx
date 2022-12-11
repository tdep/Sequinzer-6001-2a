import Stepper from "./Stepper"

const Tempo = ({ useState }) => {

  const [rate, setRate] = useState(60)
  const beats = (60 / rate) * 1000

  const slider = document.getElementById("tempo-control")
  const radialDial = document.getElementById("tempo-dial")
  const slideHandler = () => {
      setRate(slider.value)
      radialDial.style.transform = `rotate(${slider.value}deg)`
  }
  const tempo = rate;

  return (
      <div className="tempo">
        <div>
          <label for="tempo-control">Tempo: {tempo}bpm</label>
          {/* <button onClick={()=> setRate(60)}>60 bpm</button>
          <button onClick={()=> setRate(72)}>72 bpm</button>
          <button onClick={()=> setRate(86)}>86 bpm</button>
          <button onClick={()=> setRate(102)}>102 bpm</button>
          <button onClick={()=> setRate(120)}>120 bpm</button>
          <button onClick={()=> setRate(400)}>400 bpm</button> */}
          {/* <p>{rate}</p> */}
          <div className="dial">
            <img 
                id="tempo-dial" 
                src="src/assets/radialDial.png" 
                height="50px" 
                width="50px"
            />
            <div className="input">
                <input 
                    type="range" 
                    orient="vertical"
                    name="tempo-control"
                    id="tempo-control"
                    class="slider"
                    value={rate}
                    min="1" 
                    max="280"
                    step="1"
                    onChange={slideHandler}
                />
            </div>
          </div>
          <Stepper beats={beats}/>
        </div>
      </div>
  )
}

export default Tempo