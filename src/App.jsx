import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Overview from './pages/Overview'
import About from './pages/About'
import Values from './pages/Goals'
import Framework from './pages/Projects'
import Impact from './pages/Initiatives'
import Team from './pages/Team'
import Support from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <About />
        <Values />
        <Framework />
        <Impact />
        <Team />
        <Support />
      </main>
      <Footer />
    </>
  )
}
