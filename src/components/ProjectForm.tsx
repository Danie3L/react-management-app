import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { projectsProps } from '../App';

type ProjectFormProps = {
  title: string;
  projects: projectsProps[] | [];
  setProjects: React.Dispatch<React.SetStateAction<projectsProps[] | []>>;
  pickedProjectID: number;
};
export default function ProjectForm({
  title,
  projects,
  setProjects,
  pickedProjectID,
}: ProjectFormProps) {
  function handleAddTaskFormSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setProjects((prev) => {
      return prev.map((project) =>
        project.title === title
          ? { ...project, tasks: [...project.tasks, project.taskInputValue] }
          : project,
      );
    });
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setProjects((prev) => {
      return prev.map((project) =>
        project.title === title
          ? {
              ...project,
              [e.target.name]: e.target.value,
            }
          : project,
      );
    });
  }

  return (
    <section className='project-form-container'>
      <form onSubmit={handleAddTaskFormSubmit} className='new-task-form'>
        <label className='new-task-form-label'>Task</label>
        <div>
          <input
            className='new-task-form-input'
            type='text'
            value={projects[pickedProjectID].taskInputValue}
            name='taskInputValue'
            onChange={(e) => handleInputChange(e)}
          />
          <button className='new-task-form-add-button'>Add Task</button>
        </div>
      </form>
      <ul className='tasks-list'>
        {projects[pickedProjectID].tasks?.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}
