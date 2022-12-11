// const TempoDial = (rate, slideHandler, slider, radialDial) => {
//   console.log("TempoDial loaded")
//   console.log(slideHandler)

//   const slideHandler = (slider, input) => {
//     setRate(slider.value)
//     input.style.transform = `rotate(${slider.value}deg)`
//   }

//   return(
//     <div className="dial">
//       <img 
//           id="tempo-dial" 
//           src="src/assets/radialDial.png" 
//           height="50px" 
//           width="50px"
//       />
//       <div className="input">
//           <input 
//               type="range" 
//               orient="vertical"
//               name="tempo-control"
//               id="tempo-control"
//               class="slider"
//               value={rate}
//               min="1" 
//               max="280"
//               step="1"
//               onChange={()=>{slideHandler(slider, radialDial)}}
//           />
//       </div>
//     </div>
//   )
// }

// export default TempoDial