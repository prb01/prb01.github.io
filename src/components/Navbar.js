import Navlink from "./Navlink"
import homeIcon from "../assets/icons/home.svg"
import aboutIcon from "../assets/icons/about.svg"
import projectsIcon from "../assets/icons/projects.svg"
import contactIcon from "../assets/icons/contact.svg"

const DesktopView = (props) => (
  <nav
    className="
    hidden
    xl:h-full
    xl:flex
    xl:items-center
    pr-5"
  >
    <ul>
      <Navlink to="/" linkText="home" linkIcon={homeIcon} />
      <Navlink to="/about" linkText="about" linkIcon={aboutIcon} />
      <Navlink
        to="/projects"
        linkText="projects"
        linkIcon={projectsIcon}
      />
      <Navlink to="/contact" linkText="contact" linkIcon={contactIcon} />
    </ul>
  </nav>
)

const MobileView = (props) => (
  <nav
    className="
    xl:hidden
    fixed
    bottom-0
    left-0
    right-0
    shadow-top
    p-2
    z-10
    bg-slate-50
    flex
    justify-center"
  >
    <ul className="flex flex-row justify-evenly w-full">
      <Navlink to="/" linkText="home" linkIcon={homeIcon} />
      <Navlink to="/about" linkText="about" linkIcon={aboutIcon} />
      <Navlink
        to="/projects"
        linkText="projects"
        linkIcon={projectsIcon}
      />
      <Navlink to="/contact" linkText="contact" linkIcon={contactIcon} />
    </ul>
  </nav>
)

const Navbar = (props) => {
  return (
    <div>
      <DesktopView />
      <MobileView />
    </div>
  )
}

export default Navbar
