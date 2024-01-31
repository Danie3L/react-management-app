import ProjectsMenu from './components/ProjectsMenu';
import Home from './components/Home';
import NewProjectForm from './components/NewProjectForm';
import ProjectView from './components/ProjectView';
import { useState } from 'react';

export type projectsProps = {
  title: string;
  description: string;
  dueDate: string;
  taskInputValue?: string;
  tasks?: string[] | [];
};

function App() {
  const [isNewProjectFormVisible, setIsNewProjectFormVisible] = useState(false);
  const [isProjectViewVisible, setIsProjectViewVisible] = useState(false);
  const [pickedProjectID, setPickedProjectID] = useState<number>(0);
  const [projects, setProjects] = useState<projectsProps[] | []>([]);
  return (
    <>
      <ProjectsMenu
        setIsNewProjectFormVisible={setIsNewProjectFormVisible}
        setIsProjectViewVisible={setIsProjectViewVisible}
        setPickedProjectID={setPickedProjectID}
        projects={projects}
      />
      {isNewProjectFormVisible && (
        <NewProjectForm
          setIsNewProjectFormVisible={setIsNewProjectFormVisible}
          setProjects={setProjects}
        />
      )}
      {!isProjectViewVisible && !isNewProjectFormVisible ? (
        <Home setIsNewProjectFormVisible={setIsNewProjectFormVisible} />
      ) : null}
      {isProjectViewVisible && (
        <ProjectView
          projectData={projects[pickedProjectID]}
          projects={projects}
          setProjects={setProjects}
          setIsProjectViewVisible={setIsProjectViewVisible}
          pickedProjectID={pickedProjectID}
        />
      )}
    </>
  );
}

export default App;
