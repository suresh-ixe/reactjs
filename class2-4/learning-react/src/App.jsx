import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1000)

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count * 10)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
