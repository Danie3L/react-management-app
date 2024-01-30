import { projectsProps } from '../App';

type ProjectsList = {
  projects: projectsProps;
  setIsProjectViewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPickedKey: React.Dispatch<React.SetStateAction<string>>;
};
export default function ProjectsList({
  projects,
  setIsProjectViewVisible,
  setIsNewProjectFormVisible,
  setPickedKey,
}: ProjectsList) {
  function handleProjectListBtnClick(key: string) {
    setIsProjectViewVisible(true);
    setIsNewProjectFormVisible(false);
    setPickedKey(key);
  }
  return (
    <ul className='projects-list'>
      {Object.keys(projects).map((key) => {
        return (
          <li key={key}>
            <button
              onClick={() => handleProjectListBtnClick(key)}
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
