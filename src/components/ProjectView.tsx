export default function ProjectView() {
  return (
    <section className='project-section'>
      <header className='project-header'>
        <h2 className='project-heading'>Learning React</h2>
        <button className='project-delete-button'>Delete</button>
      </header>
      <div className='project-info-container'>
        <small className='project-date'>Dec 29, 2024</small>
        <p className='project-description'>Learn react from scratch</p>
      </div>
    </section>
  );
}
