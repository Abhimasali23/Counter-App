import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [change, setChange] = useState(0)
  const [userLabel, setUserLabel] = useState('')

  const handleIncrement = () =>  {
    setCounter(counter + 1)   
    setChange(Math.floor(counter/108))    
  }

  const handleDecrement = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }    
  } 

  const hadnleInputChange = (e) => {
    setUserLabel(e.target.value)
  }


  return (
    <div
      className="bg-grey p-6 rounded-lg shadow-md"
      style={{ backgroundColor: "#434242" }}
    >
      <div>
        <input
          className="text-center text-xl font-serif font-bold shadow appearance-none border rounded w-full py-3 px-3 text-orange-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={userLabel}
          onChange={hadnleInputChange}
        />
        <h2 className="text-3xl pt-1">Counter : {counter}</h2>
        <p className=" text-lg p-2">Rounds: {change}</p>
        <button
          onClick={handleDecrement}
          className="bg-yellow-500 text-white w-28 h-28 p-7 mb-5
      rounded-full focus:outline-yellow focus:ring 
      focus:border-yellow-300 transition duration-300 
      transform hover:scale-110"
        ></button>
        <br />
        <button
          onClick={handleIncrement}
          className="bg-yellow-500 text-white  w-52 h-52 p-12 
      rounded-full focus:outline-yellow focus:ring 
      focus:border-yellow-300 transition duration-300 
      transform hover:scale-110"
        ></button>
      </div>
    </div>
  );
}

export default App
