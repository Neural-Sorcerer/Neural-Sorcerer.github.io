import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-space-black text-white w-full min-h-screen selection:bg-cyber-blue selection:text-black">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-space-black">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default App
