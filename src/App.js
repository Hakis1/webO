import { useState } from 'react'
import './App.css'

function App() {
  const [age, setAge] = useState(0)
  const [Tulos, setTulos] = useState()

function laske(e) {
  e.preventDefault()
  const Upper = (220 - age) * 0.85
  const Lower = (220 - age) * 0.65
  const Tulos = (Lower +"-"+ Upper)
  setTulos(Tulos)
}

  return (

    <div id="content">
      <h3>Heart Rate Limits Calculator</h3>
      <form onSubmit={laske}>
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={e=> setAge(e.target.value)}/>
      </div>
      <div>
          <label>Heart rate limits</label>
          <output>{Tulos}</output>
          </div>
        <button type="button" onClick={laske}>laske</button>
      </form>
      </div>
  );
}

export default App;

