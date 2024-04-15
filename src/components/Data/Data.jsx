import { useToDo } from "./Queries/Hooks/todoData";

export default function Data({ option, filter }) {
  const [snapshot, setSnapshot] = useToDo(option);

  return (
    <>
      {snapshot && (
        <div className="grid md:grid-cols-4 grid-cols-2">
          {snapshot.filter(task => filter === 'None' || getCategory(task) === filter).map(task => (
            renderTask(task)
          ))}
        </div>
      )}
    </>
  );
}

function renderTask(task) {
  return (
    <ul key={task.id} className="border border-gray-200 p-4 rounded-md m-2">
      <li>
        <div><strong>Status:</strong> {task.status}</div>
        <div><strong>Task Category:</strong> {getCategory(task)}</div>
        <div><strong>Task Description:</strong> {task.task_description}</div>
        <div><strong>Created At:</strong> {formatDate(task.created_at)}</div>
        <div><strong>Due Date:</strong> {formatDate(task.due_date)}</div>
        {task.completed_at && (
          <div><strong>Completed At:</strong> {formatDate(task.completed_at)}</div>
        )}
      </li>
    </ul>
  );
}

function getCategory(task) {
  return task.categories ? task.categories.category_name : null;
}

function formatDate(date) {
  return new Date(date).toLocaleString(); 
}
