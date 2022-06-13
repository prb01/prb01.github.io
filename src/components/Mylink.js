import { NavLink } from "react-router-dom"

const DesktopView = ({ to, linkText }) => {
  return (
    <li
      className="
    hidden
    relative 

    xl:text-8xl
    xl:block
    xl:text-right
    xl:text-accent
    xl:font-nav
    xl:leading-tight"
    >
      <NavLink
        to={to}
        data-text={linkText}
        className="
        xl:before:content-[attr(data-text)]
        xl:before:absolute
        xl:before:ease-in-out
        xl:before:duration-500
        xl:before:hover:-translate-x-2
        xl:before:text-main"
      >
        {linkText}
      </NavLink>
    </li>
  )
}

const MobileView = ({ to, linkText, linkIcon }) => {
  const activeClassName = " bg-offWhite invert"
  
  return (
    <li className="xl:hidden h-full border-r border-r-lightestGrey">
      <NavLink
        to={to}
        className={({ isActive }) =>
          "flex flex-col items-center justify-evenly h-full" +
          (!isActive ? "" : activeClassName)
        }
      >
        <img src={linkIcon} alt={linkText} className="w-4" />
        <p>{linkText}</p>
      </NavLink>
    </li>
  )
}

const Mylink = (props) => {
  return (
    <div>
      <DesktopView {...props} />
      <MobileView {...props} />
    </div>
  )
}

export default Mylink
