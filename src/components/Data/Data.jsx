import { useState, useEffect } from "react";
import { useToDo } from "./Queries/Hooks/todoData";
import supabase from "../../supbase";

export default function Data({ option, filter, options}) {
  const [snapshot, setSnapshot] = useToDo(option,options);
  const [totalSelected, setTotalSelected] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  useEffect(() => {
    setTotalSelected(0);
    setSelectAll(false);
    setSelectedIds([]);
    if (snapshot) {
      const updatedSnapshot = snapshot.map(task => ({ ...task, isSelected: false }));
      setSnapshot(updatedSnapshot);
    }
  }, [option]);

  const handleTaskSelection = (isSelected, taskId) => {
    const updatedIds = isSelected
      ? [...selectedIds, taskId]
      : selectedIds.filter(id => id !== taskId);
    setSelectedIds(updatedIds);
    setTotalSelected(updatedIds.length);
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    const updatedIds = checked ? snapshot.map(task => task.id) : [];
    setSelectedIds(updatedIds);
    setTotalSelected(updatedIds.length);
    if (snapshot) {
      const updatedSnapshot = snapshot.map(task => ({ ...task, isSelected: checked }));
      setSnapshot(updatedSnapshot);
    }
  };

  const updateSelectedTasks = async (dataToUpdate) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .update(dataToUpdate)
        .in('id', selectedIds);
      if (error) {
        throw error;
      }
      console.log("Tasks updated successfully!");
      deselectAllTasks();
    } catch (error) {
      console.error("Error updating tasks:", error.message);
    }
  };

  const markSelectedAsCompleted = () => {
    const dataToUpdate = {
      status: 'completed',
      completed_at: new Date().toISOString().slice(0, 10),
    };
    updateSelectedTasks(dataToUpdate);
  };

  const deleteSelectedTasks = async() => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .in('id', selectedIds);
  
      if (error) {
        throw error;
      }
  
      console.log("Tasks deleted successfully!");
  
      deselectAllTasks();
    } catch (error) {
      console.error("Error deleting tasks:", error.message);
    }
  }

  const clearTaskCategory = () => {
    updateSelectedTasks({ task_category: null });
    deselectAllTasks();
  };

  const updateSelectedTaskCategory = async () => {
    try {
      let taskCategory = selectedCategory;
      if (selectedCategory === 'None') {
        taskCategory = null;
      }
  
      const dataToUpdate = {
        task_category: taskCategory,
      };
  
      const { error } = await supabase
        .from('tasks')
        .update(dataToUpdate)
        .in('id', selectedIds);
  
      if (error) {
        throw error;
      }
  
      console.log("Task category updated successfully!");
      deselectAllTasks();
    } catch (error) {
      console.error("Error updating task category:", error.message);
    }
  };
  
  const deselectAllTasks = () => {
    setSelectedIds([]);
    setTotalSelected(0);
    if (snapshot) {
      const updatedSnapshot = snapshot.map(task => ({ ...task, isSelected: false }));
      setSnapshot(updatedSnapshot);
    }
  };

  return (
    <>
      <div className="space-y-4 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 ">
          <div className="">
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            <label> Select All</label>
          </div>
     
        <div>Total Selected:<span className="text-green-600">{totalSelected}</span> </div>
        <div className="">
          <button className="bg-white text-black   px-1 border border-black rounded hover:bg-green-300 w-fit" onClick={markSelectedAsCompleted} disabled={totalSelected === 0}>
            Mark Completed
          </button>
        </div>
       <div className="">
       <button className='bg-white text-black   px-1 border border-black rounded hover:bg-red-300 w-fit'onClick={deleteSelectedTasks} disabled={totalSelected === 0}>
          Delete Selected
        </button>
       </div>
       <div className="">
       <button className="bg-white text-black   px-1 border border-black rounded hover:bg-yellow-300 w-fit" onClick={clearTaskCategory} disabled={totalSelected === 0}>
          Clear Task Category
        </button>
       </div>
     
    
        <div className="w-fit">

          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option key={null} value={null}>None</option>
            {options.map(option => (
              <option key={option.id} value={option.id}>{option.category_name}</option>
            ))}
          </select>
          <button className="ml-5 bg-white text-black   px-1 border border-black rounded hover:bg-green-300 w-fit" onClick={updateSelectedTaskCategory} disabled={totalSelected === 0}>
            Update Task Category
          </button>
        </div>
  
      
      </div>
      
    
      {snapshot && (
      <div className="grid md:grid-cols-4 grid-cols-2">
      {filter !== 'None' 
        ? snapshot.filter(task => task.task_category == filter).map(task => (
            <Task key={task.id} task={task} onSelectionChange={handleTaskSelection} />
          ))
        : snapshot.map(task => (
            <Task key={task.id} task={task} onSelectionChange={handleTaskSelection} />
          ))
      }
    </div>
    
      
      )}
    </>
  );
}

function Task({ task, onSelectionChange }) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(task.isSelected || false);
  }, [task.isSelected]);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onSelectionChange(!isSelected, task.id);
  };

  return (
    <div onClick={handleClick} className="border border-gray-200 p-4 rounded-md m-2">
      <ul>
        <li>
        {isSelected && (
            <div className="text-green-600"><strong>SELECTED</strong></div>
          )}
          <div><strong>Status:</strong> {task.status}</div>
          <div><strong>Task Category:</strong> {getCategory(task)}</div>
          <div><strong>Task Description:</strong> {task.task_description}</div>
          <div><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</div>
          <div><strong>Due Date:</strong> {formatDate(task.due_date)}</div>
        
        </li>
      </ul>
    </div>
  );
}

function getCategory(task) {
  return task.categories ? task.categories.category_name : null;
}

function formatDate(date) {
  const newDate = new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000);
  return newDate.toLocaleString();
}
