import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Cards from './components/Cards'
import Progression from './components/Progression'
import Navigation from './components/Navigation'
import Results from './components/Results'
function App() {

  return (
    <div className="App">
      <Title/>
      <Progression/>
      <Cards/>
      <Navigation/>
      <Results/>
    </div>
  )
}

export default App
