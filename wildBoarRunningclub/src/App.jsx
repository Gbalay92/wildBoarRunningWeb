import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Classification } from './components/Classification'



function App() {

  return (
    <>
      <Header />
      <Classification runners={[]} />
    </>
  )
}

export default App
