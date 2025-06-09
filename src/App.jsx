import { useState } from 'react'
import Home from './Home.jsx'
import Nav from './components/nav/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
    </>
  )
}

export default App
