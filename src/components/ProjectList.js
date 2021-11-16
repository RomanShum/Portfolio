import { v1 as uuidv1 } from "uuid";

function ProjectList({ projects }) {
  return (
    <div className="projects">
      {projects.map(
        (project) =>
          Object.keys(project).length > 0 && (
            <img key={uuidv1()} alt={project.category} src={project.img} />
          )
      )}
    </div>
  );
}

export default ProjectList;
