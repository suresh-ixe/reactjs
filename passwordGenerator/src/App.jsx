import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumberAllowed,setIsNumberAllowed]=useState(false)
  const [isCharAllowed,setIsCharAllowed]=useState(false)
  const [password,setPassword]=useState("password")
  const passwordGenrator=useCallback(fn,)
  return (
    <>
      <h1 className='text-4xl text-white text-center'>Password Genrator</h1>
    </>
  )
}

export default App
