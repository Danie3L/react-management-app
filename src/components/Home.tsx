import NoProjectsLogo from '../assets/no-projects.png';
type HomeProps = {
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Home({ setIsNewProjectFormVisible }: HomeProps) {
  return (
    <header className='header'>
      <img
        className='header-logo'
        src={NoProjectsLogo}
        alt='logo of black note with pen'
      />
      <h2 className='header-heading'>No Projects Selected</h2>
      <p className='header-paragraph'>
        Select a project or get started with a new one
      </p>
      <button
        onClick={() => setIsNewProjectFormVisible(true)}
        className='header-button'
      >
        Create new project
      </button>
    </header>
  );
}
