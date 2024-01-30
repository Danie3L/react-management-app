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
  const [projects, setProjects] = useState<projectsProps>();
  return (
    <>
      <ProjectsMenu
        setIsNewProjectFormVisible={setIsNewProjectFormVisible}
        projects={projects}
      />
      {isNewProjectFormVisible ? (
        <NewProjectForm
          setIsNewProjectFormVisible={setIsNewProjectFormVisible}
          setProjects={setProjects}
        />
      ) : (
        <Home setIsNewProjectFormVisible={setIsNewProjectFormVisible} />
      )}
    </>
  );
}

export default App;
