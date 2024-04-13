import {Link} from "react-router-dom"
import Todo from "../components/ToDo/ToDo"
import { createClient } from "@supabase/supabase-js";
import { Provider } from 'react-supabase'
const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_ANON_KEY)
export default function Home() {
    return (
        <Provider value={supabase}>
            <div >
                   <h1 className="text-3xl font-bold underline">
                    <Link to="/authors" >Author Pages</Link>
                    </h1>
                      <Todo/>
             
                
            </div>
            </Provider>
    
    )
}