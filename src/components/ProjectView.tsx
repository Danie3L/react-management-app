import { projectsProps } from '../App';
import ProjectForm from './ProjectForm';
type ProjectViewProps = {
  projectData: { title: string; description: string; dueDate: string };
  projects: projectsProps[] | [];
  setProjects: React.Dispatch<React.SetStateAction<projectsProps[] | []>>;
  setIsProjectViewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  pickedProjectID: number;
};

export default function ProjectView({
  projectData,
  projects,
  setProjects,
  setIsProjectViewVisible,
  pickedProjectID,
}: ProjectViewProps) {
  const { title, description, dueDate } = projectData;

  function handleProjectDelete(title: string) {
    const newProjects = projects.filter((project) => project.title !== title);
    setProjects(newProjects);
    setIsProjectViewVisible(false);
  }

  return (
    <section className='project-section'>
      <header className='project-header'>
        <h2 className='project-heading'>{title}</h2>
        <button
          onClick={() => handleProjectDelete(title)}
          className='project-delete-button'
        >
          Delete
        </button>
      </header>
      <div className='project-info-container'>
        <small className='project-date'>{dueDate}</small>
        <p className='project-description'>{description}</p>
      </div>
      <ProjectForm
        title={title}
        projects={projects}
        setProjects={setProjects}
        pickedProjectID={pickedProjectID}
      />
    </section>
  );
}
