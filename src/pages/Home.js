import {Link} from "react-router-dom"
import Todo from "../components/ToDo/ToDo"
import { createClient } from "@supabase/supabase-js";

export default function Home() {
    return (
        
            <div >
                   {/* <h1 className="text-3xl font-bold underline">
                    <Link to="/authors" >Author Pages</Link>
                    </h1> */}
                      <Todo/>
             
                
            </div>
        
    
    )
}