import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuthentication } from "./Hooks/Auth";
const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_ANON_KEY)

function Todo() {
    const { session, handleLogout } = useAuthentication();
    if (!session) {
      return (
      <>

      <div className=" mt-20 font-mono">
        <h1 className="bold flex justify-center text-4xl">
          Welcome to ToDos!
        </h1>
        <div className="w-9/12 md:w-5/12 mx-auto">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']}      />
      
        </div>
      </div>
      
 
      </>
     )
    } else {
      return (
        <div className="font-mono">
          <button className="bg-white text-black  py-2 px-4 border border-black rounded " onClick={handleLogout}>Logout</button>
        </div>
      )
    }
}

export default Todo;
