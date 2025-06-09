import { useState } from 'react'
import Hero from './components/hero/hero.jsx'
import Nav from './components/nav/navbar.jsx'
import About from './components/about/about.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
    </>
  )
}

export default App
