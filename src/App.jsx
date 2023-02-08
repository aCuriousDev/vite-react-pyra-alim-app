import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title/>
      <Cards/>
    </div>
  )
}

export default App
