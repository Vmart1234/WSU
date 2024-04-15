
import { useToDo } from "./Queries/Hooks/todoData";
import { useEffect,useState } from "react";
import { startOfWeek, endOfWeek, startOfDay, endOfDay, isWithinInterval } from 'date-fns';
export default function Data({option}){
 

const [snapShot,setSnapShot] =useToDo(option)

    return(
        <>
         {snapShot &&   (
            <>
              <div className="grid md:grid-cols-4 grid-cols-2">
                  {snapShot.map(task => (
                    renderTask(task)
                  ))}
                </div>

            </>
         )}
{/* // ) : (
//   <h1 className="text-4xl">No todos 😊</h1>
// )} */}


           
        </>
    )
}
function renderTask(task) {
    return (
      <ul key={task.id} className="border border-gray-200 p-4 rounded-md m-2">
            <li>
              <div><strong>Status:</strong> {task.status}</div>
              <div><strong>Task Category:</strong> {task.task_category}</div>
              <div><strong>Task Description:</strong> {task.task_description}</div>
              <div><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</div>
              <div><strong>Due Date:</strong> {new Date(task.due_date).toLocaleString()}</div>
              {task.completed_at && (
                <div><strong>Completed At:</strong> {new Date(task.completed_at).toLocaleString()}</div>
              )}
            </li>
          </ul>
    );
  }