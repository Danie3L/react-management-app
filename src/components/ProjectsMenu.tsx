type ProjectsMenuProps = {
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProjectsMenu({
  setIsNewProjectFormVisible,
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
    </section>
  );
}
