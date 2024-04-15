import { useState, useEffect } from "react";
import { useToDo } from "./Queries/Hooks/todoData";
import supabase from "../../supbase";

export default function Data({ option, filter, options}) {
  const [snapshot, setSnapshot] = useToDo(option);
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
      setTotalSelected(0);
      setSelectedIds([]);
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

  const deleteSelectedTasks = () => {
    updateSelectedTasks({ deleted_at: new Date().toISOString() });
  };

  const clearTaskCategory = () => {
    updateSelectedTasks({ task_category: null });
  };

  const updateSelectedTaskCategory = async () => {
    try {
      const dataToUpdate = {
        task_category: selectedCategory,
      };
      const { error } = await supabase
        .from('tasks')
        .update(dataToUpdate)
        .in('id', selectedIds);
      if (error) {
        throw error;
      }
      console.log("Task category updated successfully!");
      setTotalSelected(0);
      setSelectedIds([]);
    } catch (error) {
      console.error("Error updating task category:", error.message);
    }
  };
  return (
    <>
      <div>
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
        <label>Select All</label>
        <button onClick={markSelectedAsCompleted} disabled={totalSelected === 0}>
          Mark Selected as Completed
        </button>
        <button onClick={deleteSelectedTasks} disabled={totalSelected === 0}>
          Delete Selected
        </button>
        <button onClick={clearTaskCategory} disabled={totalSelected === 0}>
          Clear Task Category
        </button>
      
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option key={null} value={null}>None</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>{option.category_name}</option>
          ))}
        </select>
        <button onClick={updateSelectedTaskCategory} disabled={totalSelected === 0}>
          Update Task Category
        </button>
      
      </div>
      <div>Total Selected: {totalSelected}</div>
      {console.log(filter)}
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
          <div><strong>Status:</strong> {task.status}</div>
          <div><strong>Task Category:</strong> {getCategory(task)}</div>
          <div><strong>Task Description:</strong> {task.task_description}</div>
          <div><strong>Created At:</strong> {formatDate(task.created_at)}</div>
          <div><strong>Due Date:</strong> {formatDate(task.due_date)}</div>
          {isSelected && (
            <div><strong>Completed:</strong> ✔</div>
          )}
        </li>
      </ul>
    </div>
  );
}

function getCategory(task) {
  return task.categories ? task.categories.category_name : null;
}

function formatDate(date) {
  return new Date(date).toLocaleString();
}
