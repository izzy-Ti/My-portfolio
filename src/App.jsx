import { useState } from 'react'
import Hero from './components/hero/hero.jsx'
import Nav from './components/nav/navbar.jsx'
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx'
import Work from './components/mywork/work.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
