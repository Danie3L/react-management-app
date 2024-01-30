import { projectsProps } from '../App';
import ProjectsList from './ProjectsList';
type ProjectsMenuProps = {
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  projects: projectsProps;
};

export default function ProjectsMenu({
  setIsNewProjectFormVisible,
  projects,
}: ProjectsMenuProps) {
  return (
    <section className='menu-section'>
      <h1 className='menu-heading'>Your Projects</h1>
      <button
        onClick={() => setIsNewProjectFormVisible(true)}
        className='menu-button'
      >
        + Add Project
      </button>
      {projects && <ProjectsList projects={projects} />}
    </section>
  );
}
