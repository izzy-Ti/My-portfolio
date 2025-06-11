import { useState } from 'react'
import Hero from './components/hero/hero.jsx'
import Nav from './components/nav/navbar.jsx'
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx'
import Work from './components/mywork/work.jsx'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
    </>
  )
}

export default App
