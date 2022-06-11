// import logo from "./logo.svg"
// import './App.css';
import bulbDark from "./assets/img/bulb-dark.png"
import bulbLight from "./assets/img/bulb-light2.png"
import logoFull from "./assets/img/logo_retro_full.png"
import logoRound from "./assets/img/logo_retro.png"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navlink from "./components/Navlink"
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { useState } from "react"

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState("fadeIn")

  return (
    <div className="xl:flex xl:items-center xl:justify-center xl:h-screen">
      <div className="bulb-container">
        {/* <img id="bulb-dark" src={bulbDark} alt="bla" /> */}
        {/* <img id="bulb-light" src={bulbLight} alt="bla" /> */}
      </div>

      <img
        src={logoFull}
        className="hidden xl:block xl:absolute xl:left-4 xl:top-4 xl:w-32  xl:opacity-50"
      />
      <div className="xl:h-3/4 xl:grid xl:grid-cols-2 xl:gap-y-0.5 xl:justify-center">
        <Navbar />

        <Main
          location={location}
          displayLocation={displayLocation}
          setDisplayLocation={setDisplayLocation}
          transitionStage={transitionStage}
          setTransistionStage={setTransistionStage}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>

        <Footer />
      </div>
    </div>
  )
}

export default App
