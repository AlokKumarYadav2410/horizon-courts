import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Cards from './Components/Cards'
import Stats from './Components/Stats'
import Service from './Components/Service'

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <div className="stats-container">
        <Stats title='12 000+' desc='Hours of Plan anually' />
        <Stats title='89%' desc='Player Retention Rate' />
        <Stats title='1,200+' desc='Active Members' />
        <Stats title='125+' desc='Annual Tournaments' />
      </div>
      <Service />
    </div>
  )
}

export default App
