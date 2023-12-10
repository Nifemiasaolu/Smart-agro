function ProjectItem({ project }) {
  return (
    <li className=" flex-1 hover:-translate-y-2 hover:transition
     hover:duration-200 hover:ease-in-out">
      <div className="">
        <img
          src={project.imgUrl}
          alt="project"
          className="aspect-square rounded"
        />
      </div>
    </li>
  );
}

export default ProjectItem;
