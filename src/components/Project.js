import { useState } from "react"
import wwwIcon from "../assets/icons/internet-icon.svg"
import githubIcon from "../assets/icons/github-icon.svg"
import videoIcon from "../assets/icons/video-icon.svg"

const Project = ({ project }) => {
  const [overlay, setOverlay] = useState(false)
  const [hidden, setHidden] = useState(true)

  const handleClick = (e) => {
    setOverlay(!overlay)
    overlay ? setTimeout(() => true, 500) : setHidden(false)

    const targets = document.querySelectorAll(".project")
    targets.forEach((target) => {
      if (!overlay) {
        target.classList.add("pointer-events-none", "user-select-none")
      } else {
        target.classList.remove("pointer-events-none", "user-select-none")
      }
    })
  }

  return (
    <div
      key={project.name}
      className="aspect-square h-32 xl:h-48 load zoomIn"
    >
      <div
        className={`
          project relative w-full h-full flex justify-center items-center hover:scale-105 bg-contain transition-all cursor-pointer`}
        style={{ backgroundImage: `url(${project.thumbnail})` }}
        onClick={handleClick}
      >
        <div className="absolute bg-accent/20 z-10 w-full h-full hover:bg-transparent"></div>
        <div className="text-offWhite font-bold text-md xl:text-lg bg-main/90 px-1 z-20">
          {project.name}
        </div>
      </div>
      <div
        id="project-overlay"
        className={`
          ${hidden ? "hidden" : ""}
          ${overlay ? "megaZoomIn" : "megaZoomOut"}
          fixed top-0 left-0 xl:bottom-0 right-0 z-30 transition-all origin-center flex justify-center items-center px-3`}
      >
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-main/50"
          onClick={handleClick}
        ></div>
        <div
          className="absolute top-5 right-5 flex justify-center items-center text-offWhite cursor-pointer font-bold text-3xl"
          onClick={handleClick}
        >
          X
        </div>
        <div className="bg-offWhite rounded-lg p-3 xl:p-6 z-40 my-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-3 justify-items-center">
            <div className="relative shadow-main shadow-xl w-40 xl:w-auto">
              <img src={project.img} alt="project preview" />
              <div className="flex basis-1 absolute -bottom-3 left-1/2 -translate-x-1/2">
                {project.devTools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-l-full rounded-r-full bg-accent px-3 mr-1"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid-rows-3">
              <h2 className="font-bold mb-3 text-3xl text-center xl:mb-5">
                {project.name}
              </h2>

              <div className="mb-5">{project.description}</div>
              <div className="flex basis-1 gap-6 justify-center">
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-8 hover:scale-110 iconAccent transition-all"
                    src={wwwIcon}
                    alt="website icon"
                  />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-8 hover:scale-110 iconAccent transition-all"
                    src={githubIcon}
                    alt="github icon"
                  />
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-8 hover:scale-110 iconAccent transition-all"
                    src={videoIcon}
                    alt="video icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
