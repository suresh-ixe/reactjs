import { useState, memo } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  

  
  

  


  

  const [id,setId]=useState(1);

  return (
    <>
    <button onClick={()=>{
      setId(1)
    }}>1</button>
    <button onClick={()=>{
      setId(2)
    }}>2</button>
    <button onClick={()=>{
      setId(3)
    }}>3</button>
      
     
      <CreateTodo id={id}/>
    </>
  );
}

function CreateTodo({ id }) {

  const [todo,setTodo]=useState({})
  

  useEffect( ()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(res=>{
      setTodo(res.data.todo)
    })
  },[id])
            
  

  
  return (
    
    <div>
      id:{id}
      <h1>{todo.title}</h1>

      <h2>{todo.description}</h2>
    </div>
  
  );
}

export default App;
