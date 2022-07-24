import React, { useState, useEffect } from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Fullpage, FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import Loader from './Components/Loader';
import { motion } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    Aos.init({
      duration: 1500,
    })
  }, [])
  return (
    <>
      {
        loading ?
          <Loader loading={loading} />
          :
          <motion.div className="bg-[#021d44] tracking-[0.18em]" initial={{ opacity: 0.7 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='fixed top-0 right-0 h-[100vh] bg-[#f7f6f5] opacity-[0.03] xsm:w-[40%] w-[50%]'></div>
            <Navbar />
            <Fullpage>
              <FullPageSections>
                <FullpageSection>
                  <Home />
                </FullpageSection>
                <FullpageSection>
                  <About />
                </FullpageSection>
                <FullpageSection>
                  <Skills />
                </FullpageSection>
                <FullpageSection>
                  <Projects />
                </FullpageSection>
                <FullpageSection>
                  <Contact />
                </FullpageSection>
              </FullPageSections>
            </Fullpage >
          </motion.div>
      }
    </>
  );
}

export default App;
