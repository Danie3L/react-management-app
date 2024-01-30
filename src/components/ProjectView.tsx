type ProjectViewProps = {
  projectData: { title: string; description: string; dueDate: string };
};

export default function ProjectView({ projectData }: ProjectViewProps) {
  const { title, description, dueDate } = projectData;

  return (
    <section className='project-section'>
      <header className='project-header'>
        <h2 className='project-heading'>{title}</h2>
        <button className='project-delete-button'>Delete</button>
      </header>
      <div className='project-info-container'>
        <small className='project-date'>{dueDate}</small>
        <p className='project-description'>{description}</p>
      </div>
    </section>
  );
}
