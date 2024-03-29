import Mylink from "./Mylink"
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
      <Mylink to="/" linkText="home" linkIcon={homeIcon} />
      <Mylink to="/about" linkText="about" linkIcon={aboutIcon} />
      <Mylink to="/projects" linkText="projects" linkIcon={projectsIcon} />
      <Mylink to="/contact" linkText="contact" linkIcon={contactIcon} />
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
    z-10
    bg-slate-50
    flex
    justify-center
    place-items-center
    h-10
    text-xs"
  >
    <ul className="grid grid-cols-4 w-full h-full">
      <Mylink to="/" linkText="home" linkIcon={homeIcon} />
      <Mylink to="/about" linkText="about" linkIcon={aboutIcon} />
      <Mylink
        to="/projects"
        linkText="projects"
        linkIcon={projectsIcon}
      />
      <Mylink to="/contact" linkText="contact" linkIcon={contactIcon} />
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
