import { Link } from "react-router-dom"

const DesktopView = ({ to, linkText }) => {
  return (
    <li
      className="
    hidden
    relative 
    transition-smooth

    xl:text-8xl
    xl:block
    xl:text-right
    xl:text-accent
    xl:font-nav
    xl:leading-tight"
    >
      <Link
        to={to}
        data-text={linkText}
        className="
        xl:before:content-[attr(data-text)]
        xl:before:absolute
        xl:before:transition-smooth
        xl:before:hover:-translate-x-1
        xl:before:text-main"
      >
        {linkText}
      </Link>
    </li>
  )
}

const MobileView = ({ to, linkText, linkIcon }) => {
  return (
    <li className="xl:hidden">
      <Link to={to}>
        <img src={linkIcon} alt={linkText} className="w-16"/>
      </Link>
    </li>
  )
}

const Navlink = (props) => {
  return (
    <div>
      <DesktopView {...props} />
      <MobileView {...props} />
    </div>
  )
}

export default Navlink
