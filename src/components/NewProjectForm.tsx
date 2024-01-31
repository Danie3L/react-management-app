import { projectsProps } from '../App';
import { SyntheticEvent, useRef } from 'react';
type NewProjectFormProps = {
  setIsNewProjectFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setProjects: React.Dispatch<React.SetStateAction<projectsProps[] | []>>;
};

export default function NewProjectForm({
  setIsNewProjectFormVisible,
  setProjects,
}: NewProjectFormProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  function handleProjectSave(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsNewProjectFormVisible(false);
    setProjects((prev) => {
      return [
        ...prev,
        {
          title: title.current?.value as string,
          description: description.current?.value as string,
          dueDate: dueDate.current?.value as string,
          taskInputValue: '',
          tasks: [],
        },
      ];
    });
  }

  return (
    <section className='form-container'>
      <form className='form' onSubmit={handleProjectSave}>
        <div className='form-buttons-container'>
          <button
            onClick={() => setIsNewProjectFormVisible(false)}
            className='form-cancel-button'
          >
            Cancel
          </button>
          <button className='form-submit-button' type='submit'>
            Save
          </button>
        </div>
        <label className='form-label' htmlFor='title'>
          Title
        </label>
        <input className='form-input ' type='text' id='title' ref={title} />
        <label className='form-label' htmlFor='description'>
          Description
        </label>
        <input
          className='form-input form-input-description'
          type='text'
          id='description'
          ref={description}
        />
        <label className='form-label' htmlFor='date'>
          Due Date
        </label>
        <input className='form-input' type='date' id='date' ref={dueDate} />
      </form>
    </section>
  );
}
