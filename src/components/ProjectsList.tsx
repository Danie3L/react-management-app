import { projectsProps } from '../App';

type ProjectsList = {
  projects: projectsProps[];
  setIsProjectViewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPickedProjectID: React.Dispatch<React.SetStateAction<number>>;
};
export default function ProjectsList({
  projects,
  setIsProjectViewVisible,
  setIsNewProjectFormVisible,
  setPickedProjectID,
}: ProjectsList) {
  function handleProjectListBtnClick(index: number) {
    setIsProjectViewVisible(true);
    setIsNewProjectFormVisible(false);
    setPickedProjectID(index);
  }
  return (
    <ul className='projects-list'>
      {projects.map((project, index) => {
        return (
          <li key={project.title}>
            <button
              onClick={() => handleProjectListBtnClick(index)}
              className='projects-list-button'
            >
              {project.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
