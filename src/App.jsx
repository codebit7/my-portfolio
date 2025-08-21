import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar/>
          <Home/>
          <About/>
          <Services/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App
