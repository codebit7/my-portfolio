import { useState, useEffect } from 'react'
import AOS from 'aos'
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

  // Scroll animations are initialised once for the whole page
  // (previously every component called AOS.init on its own).
  useEffect(() => {
    if (loading) return;
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, [loading])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar/>
          <main>
            <Home/>
            <About/>
            <Services/>
            <Experience/>
            <Projects/>
            <Contact/>
          </main>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App
