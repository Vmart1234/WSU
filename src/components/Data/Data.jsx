
import { useToDo } from "./Queries/Hooks/todoData";
import { useEffect,useState } from "react";
import { startOfWeek, endOfWeek, startOfDay, endOfDay, isWithinInterval } from 'date-fns';
export default function Data({option}){
 

const [snapShot,setSnapShot] =useToDo(option)
const now = new Date();
const startOfToday = startOfDay(now);
const endOfToday = endOfDay(now);
const startOfThisWeek = startOfWeek(now);
const endOfThisWeek = endOfWeek(now);
    return(
        <>
         {snapShot && snapShot.length > 0 ? (
  <>
    {console.log(snapShot)}
    <div className="grid md:grid-cols-4 grid-cols-2 ">
      {snapShot.map(task => {
        // Convert the completed_at date to a JavaScript Date object
        const completedAt = new Date(task.completed_at);

        // Check if the task was completed today or this week
        const completedToday = isWithinInterval(completedAt, { start: startOfToday, end: endOfToday });
        const completedThisWeek = isWithinInterval(completedAt, { start: startOfThisWeek, end: endOfThisWeek });

        // Render tasks based on their completion status and date
        if (task.status === 'completed') {
          if (completedToday) {
            return renderTask(task, 'Completed Today');
          } else if (completedThisWeek) {
            return renderTask(task, 'Completed This Week');
          }
        } else {
          return renderTask(task, 'Normal');
        }
      })}
    </div>
  </>
) : (
  <h1 className="text-4xl">No todos 😊</h1>
)}


           
        </>
    )
}
function renderTask(task) {
    return (
      <ul key={task.id} className="border border-gray-200 p-4 rounded-md m-2 ">
        <li className="">
          <div><strong>ID:</strong> {task.id}</div>
          <div><strong>Status:</strong>{task.status}</div>
          <div><strong>Task Category:</strong> {task.task_category}</div>
          <div><strong>Task Description:</strong> {task.task_description}</div>
          <div><strong>Completed At:</strong> {new Date(task.completed_at).toLocaleString()}</div>
          <div><strong>Due Date:</strong> {new Date(task.due_date).toLocaleString()}</div>
        </li>
      </ul>
    );
  }