import NoProjectsLogo from '../assets/no-projects.png';
export default function Home() {
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
      <button className='header-button'>Create new project</button>
    </header>
  );
}
