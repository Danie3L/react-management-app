import ProjectsMenu from './components/ProjectsMenu';
import Home from './components/Home';
import NewProjectForm from './components/NewProjectForm';
import ProjectView from './components/ProjectView';
import { useState } from 'react';

export type projectsProps = {
  [key: string]: {
    title: string;
    description: string;
    dueDate: string;
  };
};

function App() {
  const [isNewProjectFormVisible, setIsNewProjectFormVisible] = useState(false);
  const [isProjectViewVisible, setIsProjectViewVisible] = useState(false);
  const [projects, setProjects] = useState<projectsProps>();
  return (
    <>
      <ProjectsMenu
        setIsNewProjectFormVisible={setIsNewProjectFormVisible}
        setIsProjectViewVisible={setIsProjectViewVisible}
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
      {isProjectViewVisible && <ProjectView />}
    </>
  );
}

export default App;
