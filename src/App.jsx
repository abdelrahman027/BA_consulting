import React from 'react'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import About from './components/About'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Destinations />
      <About />
    </div>
  )
}

export default App