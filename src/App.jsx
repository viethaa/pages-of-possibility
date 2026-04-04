import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import FloatingNav from './components/FloatingNav'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Overview from './pages/Overview'
import About from './pages/About'
import Framework from './pages/Projects'
import Impact from './pages/Initiatives'
import Budget from './pages/Budget'
import Team from './pages/Team'
import Support from './pages/Contact'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    })
  }, [])

  return (
    <>
      <FloatingNav />
      <main>
        <Hero />
        <Overview />
        <About />
        <Team />
        <Framework />
        <Impact />
        <Budget />
        <Support />
      </main>
      <Footer />
    </>
  )
}
