import React, { useState } from 'react';
import { handleSubmit } from './functions/submit';

const TaskForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [priorityLevel, setPriorityLevel] = useState();

  const handleFormSubmit = async (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      
      return;
    }
    event.preventDefault();

    try {
      await handleSubmit({
        taskDescription,
        dueDate,
        taskCategory,
        priorityLevel,
       
      });

      // Clear form fields after successful submission
      setTaskDescription('');
      setDueDate('');
      setTaskCategory('');
      setPriorityLevel('');
    } catch (error) {
      // Handle error
    }
  };

  return (
   <>
   <div className="flex flex-col w-screen">
    <form className='' onSubmit={handleFormSubmit}>
      <div>
        <label>
          Task Description:
          <input
            className='text-sm placeholder:text-gray-400 w-full border border-black rounded'
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
       
          />
        </label>
      </div>
      <div>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Task Category:
          <input
           className='text-sm placeholder:text-gray-400 w-full border border-black rounded'
            type="text"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Priority Level:
          <input
            type="number"
            value={priorityLevel}
            onChange={(e) => setPriorityLevel(e.target.value)}
            min="1"
            max="4"
            className='text-sm placeholder:text-gray-400'
            
          />
        </label>
      </div>
 
      <button type='submit' className='mt-3 bg-white text-black  py-2 px-4 border border-black rounded hover:bg-green-300 w-full'>Submit</button>
    </form>
 
   </div>
     
   </>
  );
};

export default TaskForm;
