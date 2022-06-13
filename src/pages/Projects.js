import Project from "../components/Project"
import { projects } from "../data/projects"

const Projects = (props) => {
  props.loadTrigger()

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 p-5 gap-2 items-center justify-items-center h-max">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  )
}

export default Projects
