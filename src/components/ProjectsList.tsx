import { projectsProps } from '../App';

type ProjectsList = {
  projects: projectsProps;
  setIsProjectViewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ProjectsList({
  projects,
  setIsProjectViewVisible,
  setIsNewProjectFormVisible,
}: ProjectsList) {
  function handleProjectListBtnClick() {
    setIsProjectViewVisible(true);
    setIsNewProjectFormVisible(false);
  }
  return (
    <ul className='projects-list'>
      {Object.keys(projects).map((key) => {
        return (
          <li key={key}>
            <button
              onClick={handleProjectListBtnClick}
              className='projects-list-button'
            >
              {key}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
