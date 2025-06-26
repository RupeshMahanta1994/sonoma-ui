import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)} className='bg-blue-500 text-white py-2 px-4 rounded'>Count is {count}</button>
    </>
  )
}

export default App
