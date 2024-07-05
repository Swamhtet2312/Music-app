import { useState } from 'react'
import Navbar from './components/Navbar'
import Display from './components/Display'
import Footer from './components/Footer'
import Music from './components/Music'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Navbar/>
        <Display/>
        <Music/>
      </div>
      <Footer/>
    </>
  )
}

export default App
