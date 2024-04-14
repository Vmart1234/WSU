import { useEffect, useState } from "react";

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuthentication } from "./Hooks/Auth";
import supabase from "../../supbase";
import Data from "../Data/Data";
import TaskForm from "../Submit/Submit";
import Options from "../Options/Options";
import { validatePassword } from "firebase/auth";
function Todo() {
    //const { session, handleLogout } = useAuthentication();
    const [option, setOption] = useState(1);

    const handleChange = (event) => {
      setOption(Number(event.target.value));
    };
    // if (!session) {
      return (
      <>

      <div className=" mt-20 font-mono">
        <h1 className="bold flex justify-center text-4xl">
          Welcome to ToDos!
        </h1>
        {/* <div className=""> */}
            {/* <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']}      /> */}
        
        {/* </div> */}
        <div className="md:grid md:grid-cols-1 lg:grid-cols-5 ">
          <div className="flex  mb-5 ">
              <TaskForm />
          </div>
          <div className="md:ml-5  ">
              <Options handleChange={handleChange} option={option}/>
              
                <Data option={option}/>






              
          </div>
        </div>


      </div>
      
 
      </>
     )
    // } else {
    //   return (
    //     <div className="font-mono">
    //       <button className="bg-white text-black  py-2 px-4 border border-black rounded " onClick={handleLogout}>Logout</button>
    //       <Data/>
    //     </div>
    //   )
    // }
}

export default Todo;
