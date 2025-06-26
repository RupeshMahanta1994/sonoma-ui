import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
