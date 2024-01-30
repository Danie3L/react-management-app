import ProjectsMenu from './components/ProjectsMenu';
import Home from './components/Home';
import NewProjectForm from './components/NewProjectForm';
import { useState } from 'react';
function App() {
  const [isNewProjectFormVisible, setIsNewProjectFormVisible] = useState(false);
  return (
    <>
      <ProjectsMenu setIsNewProjectFormVisible={setIsNewProjectFormVisible} />
      {isNewProjectFormVisible ? (
        <NewProjectForm
          setIsNewProjectFormVisible={setIsNewProjectFormVisible}
        />
      ) : (
        <Home setIsNewProjectFormVisible={setIsNewProjectFormVisible} />
      )}
    </>
  );
}

export default App;
