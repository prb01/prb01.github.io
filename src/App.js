// import bulbDark from "./assets/img/bulb-dark.png"
// import bulbLight from "./assets/img/bulb-light2.png"
// import logoFull from "./assets/img/logo_retro_full.png"
import logoRound from "./assets/img/logo_retro.png"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Notification from "./components/Notification"
import { Routes, Route, useLocation } from "react-router-dom"
import { useState } from "react"

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState("fadeIn")
  const [notification, setNotification] = useState({})

  const loadTrigger = () => {
    setTimeout(() => {
      const targets = document.querySelectorAll(".load")
      targets.forEach((target, idx) => {
        setTimeout(() => {
          target.classList.add("load-triggered")
        }, 250 * idx)
      })
    }, 0)
  }

  return (
    <div className="xl:flex xl:items-center xl:justify-center xl:h-screen">
      <Notification notification={notification} />
      <div className="bulb-container">
        {/* <img id="bulb-dark" src={bulbDark} alt="bla" /> */}
        {/* <img id="bulb-light" src={bulbLight} alt="bla" /> */}
      </div>

      <a href="https://www.prb01.com">
        <img
          src={logoRound}
          alt="prb01 logo"
          className="hidden xl:block xl:absolute xl:left-4 xl:top-4 xl:w-10 xl:opacity-40 xl:hover:opacity-100 xl:hover:scale-105 xl:transition-all"
        />
      </a>
      <div className="xl:max-h-3/4 xl:grid xl:grid-cols-2 xl:gap-y-0.5 xl:justify-center">
        <Navbar location={location} displayLocation={displayLocation} />

        <Main
          location={location}
          displayLocation={displayLocation}
          setDisplayLocation={setDisplayLocation}
          transitionStage={transitionStage}
          setTransistionStage={setTransistionStage}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={<Projects loadTrigger={loadTrigger} />}
            />
            <Route
              path="/contact"
              element={
                <Contact
                  loadTrigger={loadTrigger}
                  setNotification={setNotification}
                />
              }
            />
          </Routes>
        </Main>

        <Footer />
      </div>
    </div>
  )
}

export default App
