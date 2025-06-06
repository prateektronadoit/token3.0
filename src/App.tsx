// App Component
import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import HeroSection from './components/HeroSection'
import AboutTronado from './components/AboutTronado'
import TronadoHowItWorks from './components/TronadoHowItWorks'
import IcoAboutSection from './components/IcoAboutSection'
import TronadoTokenomics from './components/TronadoTokenomics'
import WhyChooseTronado from './components/WhyChooseTronado'
import WhitepaperSection from './components/WhitepaperSection'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import { RocketLaunchAnimation } from './components/RocketLaunchAnimation'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [showContent, setShowContent] = useState(false)
  
  // Set a timeout to prevent animation from running if there are issues
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (showAnimation) {
        setShowAnimation(false)
        setShowContent(true)
      }
    }, 10000) // Fallback timer of 10 seconds
    
    return () => clearTimeout(timeout)
  }, [showAnimation])

  const handleAnimationComplete = () => {
    setShowAnimation(false)
    setShowContent(true)
  }

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      {/* Launch Animation */}
      <AnimatePresence>
        {showAnimation && (
          <RocketLaunchAnimation onAnimationComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>
      

      
      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header />
            <HeroSection />
            <AboutTronado />
            <TronadoHowItWorks />
            <IcoAboutSection />
            <TronadoTokenomics />
            <WhyChooseTronado />
            <WhitepaperSection />
            <Roadmap />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
