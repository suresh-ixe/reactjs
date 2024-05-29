import { useState } from 'react'


function App() {
  const [color ,setColor] = useState("#313131")
  

  return (
    <>
     

     <div className='w-full h-screen' style={{ backgroundColor: color}}>
     <div className='flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white text-white px-3 py-3 rounded-xl'>
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-1
      rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}> Red</button>
      <button onClick={()=>setColor("green")} className="outline-none px-4 py-1
      rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1
      rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}> Blue</button>
     </div>
     </div>

     </div>
    </>
  )
}

export default App
