import { projectsProps } from '../App';
import ProjectsList from './ProjectsList';
type ProjectsMenuProps = {
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProjectViewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  projects: projectsProps | undefined;
};

export default function ProjectsMenu({
  setIsNewProjectFormVisible,
  setIsProjectViewVisible,
  projects,
}: ProjectsMenuProps) {
  function handleProjectMenuBtnClick() {
    setIsProjectViewVisible(false);
    setIsNewProjectFormVisible(true);
  }
  return (
    <section className='menu-section'>
      <h1 className='menu-heading'>Your Projects</h1>
      <button onClick={handleProjectMenuBtnClick} className='menu-button'>
        + Add Project
      </button>
      {projects && (
        <ProjectsList
          projects={projects}
          setIsProjectViewVisible={setIsProjectViewVisible}
          setIsNewProjectFormVisible={setIsNewProjectFormVisible}
        />
      )}
    </section>
  );
}
