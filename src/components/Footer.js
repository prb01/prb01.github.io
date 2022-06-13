const Footer = (props) => {
  return (
    <footer className="hidden xl:flex xl:flex-col xl:justify-center xl:text-lightGrey xl:fixed xl:bottom-3 xl:left-0 xl:right-0">
      <div className="flex gap-5 justify-center items-center text-4xl">
        <a
          href="https://www.linkedin.com/in/prb01/"
          className="hover:text-accent hover:scale-105 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/prb01"
          className="hover:text-accent hover:scale-105 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="mailto:info@prb01.com"
          className="hover:text-accent hover:scale-105 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
