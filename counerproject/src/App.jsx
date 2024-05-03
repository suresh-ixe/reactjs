import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    if(count<20&& count>=0)setCount(count+1)
    else setCount(count)
  }
  const removeValue=()=>{
    if(count<=20 && count>0)setCount(count-1)
    else setCount(count)
  }
  return (
    <>
      
      <h1>Counter Project</h1>
      <div className="card">

        <h2> Counter is {count}</h2>
        <button onClick={addValue} >
          Add Value
        </button>
        <button onClick={removeValue}>
          Remove Value
        </button>
        
      </div>
      
    </>
  )
}

export default App
