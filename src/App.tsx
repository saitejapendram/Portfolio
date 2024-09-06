import { About } from "./components/About"
import { Contacts } from "./components/Contacts"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Technologies } from "./components/Technologies"




function App() {
  

  return (
    <>
         <div className="absolute top-0 z-[-2] h-auto w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
              <Navbar />
              <Hero/>
              <About />
              <Technologies />
              <Projects />
              <Contacts />
         </div>
         
         
    </>
  )
}

export default App
