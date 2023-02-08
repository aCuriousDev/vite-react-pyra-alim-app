import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Cards from './components/Cards'
import Progression from './components/Progression'

function App() {

  return (
    <div className="App">
      <Title/>
      <Cards/>
      <Progression/>
    </div>
  )
}

export default App
