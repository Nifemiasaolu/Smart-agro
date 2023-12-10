import { data } from "../Constants";
import ProjectItem from "../Features/ProjectItem";

function Projects() {
  return (
    <div className="section-padding pt-8 flex-center flex-col">
      <div>
        <p className="p-gothic mb-[1rem] text-xs uppercase">
          Recently Completed Work
        </p>
        <h1 className="p-livvic mb-[1rem] text-center text-lg font-bold capitalize  ">
          Explore Our Projects
        </h1>
      </div>

      <ul className="flex flex-wrap gap-4">
        {data.projects.map(project=> <ProjectItem project={project} key={project.id}/>)}
      </ul>
    </div>
  );
}

export default Projects;
///
