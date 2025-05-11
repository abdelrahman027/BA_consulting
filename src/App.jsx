import React from 'react'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import About from './components/About'
import StartForm from './components/StartForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden flex flex-col items-center justify-center'>
      <Hero />
      <Destinations />
      <About />
      <StartForm />
      <Footer />
    </div>
  )
}

export default App