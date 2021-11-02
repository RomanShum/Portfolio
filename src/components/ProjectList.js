function ProjectList({ projects }) {
  return (
    <div className="projects">
      {projects.map((item, i) => (
        <img key={i} alt={i} src={item.img} />
      ))}
    </div>
  );
}

export default ProjectList;
