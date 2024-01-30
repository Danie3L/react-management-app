import { projectsProps } from '../App';

type ProjectsList = {
  projects: projectsProps;
};
export default function ProjectsList({ projects }: ProjectsList) {
  return (
    <ul className='projects-list'>
      {Object.keys(projects).map((key) => {
        return (
          <li key={key}>
            <button className='projects-list-button'>{key}</button>
          </li>
        );
      })}
    </ul>
  );
}
