function ProjectItem({ project }) {
  return (
    <li className="hover:translate-y-4 duration-200 transition">
      <img src={project.imgUrl} alt="project" className="w-[5rem] rounded"/>
    </li>
  );
}

export default ProjectItem;
