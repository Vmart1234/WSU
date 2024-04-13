
import { useToDo } from "./Queries/Hooks/todoData";
import { useEffect,useState } from "react";
export default function Data({}){
 

const snapShot =useToDo()
    return(
        <>
            {snapShot &&(
            <>
             {console.log(snapShot)}
            </>
                
            )}
           
        </>
    )
}