import { useState } from 'react'
import Quotes from './components/Quotes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Quotes/>
  )
}

export default App
