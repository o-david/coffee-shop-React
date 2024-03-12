import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  function addCount() {
    setCount(count+1)    
  }
  return (
    <>
      <button onClick={addCount}> click me</button>
      <p>{count}</p>
    </>
  )
}

export default App
