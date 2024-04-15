import { useEffect, useState } from "react";
import Data from "../Data/Data";
import TaskForm from "../Submit/Submit";
import Options from "../Options/Options";
import Category from "../Category/Category";
import { useToDoCategory } from "../Category/Hooks/todoCategory";

function Todo() {
    const [option, setOption] = useState(1);
    const { category, filter, setFilter } = useToDoCategory();

    const handleChange = (event) => {
        setOption(Number(event.target.value));
    };
    
    return (
        <>
            <div className="mt-20 font-mono">
                <h1 className="bold flex justify-center text-4xl">
                    Welcome to ToDos!
                </h1>
                <div className="md:grid md:grid-cols-4 lg:grid-cols-4 ">
                    <div className="flex mb-5 md:col-span-1 lg:col-span-1 md:mr-5 flex-col">
                        <TaskForm />
                        <Category options={category} setFilter={setFilter} />
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 ">
                        <Options handleChange={handleChange} option={option} setFilter={setFilter} />
                        <Data option={option} filter={filter} options={category} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
