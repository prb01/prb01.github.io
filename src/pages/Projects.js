import { useState } from "react"
import projectAbraThumbnail from "../assets/img/project_abrapalabra_500x500.webp"

const Projects = (props) => {
  props.loadTrigger()

  const projects = [
    {
      name: "AbraPalabra",
      devTools: ["html", "css", "js"],
      description:
        "Responsive Wordle clone with Spanish dictionary. Features both interactive Mouse/Touch keyboard & Typing input which changes dynamically depending on guessed letters.",
      thumbnail: projectAbraThumbnail,
      img: "",
      siteLink: "",
      githubLink: "",
      demoLink: "",
    },
    {
      name: "Project2",
      devTools: ["html", "css", "js"],
      description: "bla bla bla",
      thumbnail: "",
      img: "",
    },
    {
      name: "Project3",
      devTools: ["html", "css", "js"],
      description: "bla bla bla",
      thumbnail: "",
      img: "",
    },
    {
      name: "Project4",
      devTools: ["html", "css", "js"],
      description: "bla bla bla",
      thumbnail: "",
      img: "",
    },
    {
      name: "Project5",
      devTools: ["html", "css", "js"],
      description: "bla bla bla",
      thumbnail: "",
      img: "",
    },
    {
      name: "Project6",
      devTools: ["html", "css", "js"],
      description: "bla bla bla",
      thumbnail: "",
      img: "",
    },
  ]

  const Project = ({ project }) => {
    const [overlay, setOverlay] = useState(false)

    const handleClick = (e) => {
      setOverlay(!overlay)

      const targets = document.querySelectorAll(".project, a")

      targets.forEach((target) => {
        if (!overlay) {
          target.classList.add("pointer-events-none", "user-select-none")
        } else {
          target.classList.remove(
            "pointer-events-none",
            "user-select-none"
          )
        }
      })
    }

    return (
      <div key={project.name} className="aspect-square h-36 xl:h-48 load zoomIn">
        <div
          className={`
          project relative w-full h-full flex justify-center items-center hover:scale-105 bg-contain transition-all cursor-pointer`}
          style={{ backgroundImage: `url(${project.thumbnail})` }}
          onClick={handleClick}
        >
          <div className="absolute bg-accent/20 z-10 w-full h-full hover:bg-transparent"></div>
          <div className="text-offWhite font-bold text-lg bg-main/90 px-2 z-20">
            {project.name}
          </div>
        </div>
        <div
          id="project-overlay"
          className={`
          ${overlay ? "" : setTimeout(() => "hidden", 500)}
          ${overlay ? "megaZoomIn" : "megaZoomOut"}
          fixed top-0 left-0 bottom-0 right-0 overflow-hidden z-30 transition-all origin-center flex justify-center items-center`}
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
          <div className="bg-offWhite rounded-lg p-4 z-40">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <div>IMAGE</div>
              <div className="grid-rows-4">
                <h2 className="font-bold text-3xl">{project.name}</h2>
                <div className="flex basis-1">
                  {project.devTools.map((tool) => (
                    <div
                      key={tool}
                      className="rounded-l-full rounded-r-full bg-accent px-3"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
                <div>DESCRIPTION</div>
                <div>LINKS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 p-5 gap-2 items-center justify-items-center h-max">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  )
}

export default Projects
