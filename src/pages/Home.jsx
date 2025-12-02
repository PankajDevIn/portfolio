import React from 'react'

import Navbar from '../component/Navbar.jsx';
import Hero from '../component/Hero.jsx';
import Services from '../component/Services.jsx';
import AISection from '../component/AISection.jsx';
import Projects from '../component/Projects.jsx';
import Contact from '../component/Contact.jsx';
import Footer from '../component/Footer.jsx';




const Home = () => {
  return (
     <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <Services />
      <AISection />
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  )
}

export default Home