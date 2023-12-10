import { data, images } from "../Constants";
import ProjectItem from "../Features/ProjectItem";

function Projects() {
  return (
    <div id="project" className="section-padding py-[4rem] bg-darkGreen flex-center relative flex-col">
      <div>
        <p className="p-gothic text-center mb-[10px] text-[10px] uppercase">
          Recently Completed Work
        </p>
        <h1 className="p-livvic mb-[1rem] text-center text-lg font-bold capitalize  ">
          Explore Our Projects
        </h1>
      </div>

      <ul className=" flex-wrap gap-4 flex-center">
        {data.projects.map(project=> <ProjectItem project={project} key={project.id}/>)}
      </ul>

      <div className="absolute bottom-0">
        <img src={images.exploreProjectStyle} alt="Project style" />
      </div>
    </div>
  );
}

export default Projects;
///
