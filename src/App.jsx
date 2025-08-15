import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Experience/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
