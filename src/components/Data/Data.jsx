
import { useToDo } from "./Queries/Hooks/todoData";
import { useEffect,useState } from "react";
export default function Data({option}){
 

const [snapShot,setSnapShot] =useToDo(option)
    return(
        <>
            {snapShot &&(
            <>
             {console.log(snapShot)}
             <div className=" w-screen overflow-y ">
                {snapShot.map(task => (
                    <ul key={task.id} className="border border-gray-200 p-4 rounded-md m-2 ">
                        <li className="">
                            <div><strong>ID:</strong> {task.id}</div>
                            <div><strong>Status:</strong> {task.status}</div>
                            <div><strong>Task Category:</strong> {task.task_category}</div>
                            <div><strong>Task Description:</strong> {task.task_description}</div>
                            <div><strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}</div>
                            <div><strong>Due Date:</strong> {new Date(task.due_date).toLocaleString()}</div>
                        </li>
                    </ul>
                ))}
            </div>

      
            </>
                
            )}
           
        </>
    )
}