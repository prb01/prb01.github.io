import logo from "./logo.svg"
// import './App.css';
import bulbDark from "./assets/img/bulb-dark.png"
import bulbLight from "./assets/img/bulb-light2.png"
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
  Link,
  useParams,
  useNavigate,
  useMatch,
} from "react-router-dom"

function App() {
  return (
    <div className="xl:flex xl:items-center xl:justify-center xl:h-screen">
      <div className="bulb-container">
        {/* <img id="bulb-dark" src={bulbDark} alt="bla" /> */}
        {/* <img id="bulb-light" src={bulbLight} alt="bla" /> */}
      </div>

      <div className="xl:grid xl:grid-cols-2 xl:gap-y-0.5 xl:justify-center">
        <Navbar />

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/" element={<Projects />} />
            <Route path="/" element={<Contact />} />
          </Routes>
        </Main>

        <Footer />
      </div>
    </div>
  )
}

export default App
