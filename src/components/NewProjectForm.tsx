export default function NewProjectForm() {
  return (
    <section className='form-container'>
      <form className='form'>
        <div className='form-buttons-container'>
          <button className='form-cancel-button'>Cancel</button>
          <button className='form-submit-button' type='submit'>
            Save
          </button>
        </div>
        <label className='form-label' htmlFor='title'>
          Title
        </label>
        <input className='form-input ' type='text' id='title' />
        <label className='form-label' htmlFor='description'>
          Description
        </label>
        <input
          className='form-input form-input-description'
          type='text'
          id='description'
        />
        <label className='form-label' htmlFor='date'>
          Due Date
        </label>
        <input className='form-input' type='date' id='date' />
      </form>
    </section>
  );
}
