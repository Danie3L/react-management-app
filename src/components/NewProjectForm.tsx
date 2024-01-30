type NewProjectFormProps = {
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NewProjectForm({
  setIsNewProjectFormVisible,
}: NewProjectFormProps) {
  function handleProjectSave() {
    setIsNewProjectFormVisible(false);
  }
  return (
    <section className='form-container'>
      <form className='form'>
        <div className='form-buttons-container'>
          <button
            onClick={() => setIsNewProjectFormVisible(false)}
            className='form-cancel-button'
          >
            Cancel
          </button>
          <button
            onClick={handleProjectSave}
            className='form-submit-button'
            type='submit'
          >
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
