import {Link} from "react-router-dom"

export default function Home() {
    return (
  
            <div >
                   <h1 className="text-3xl font-bold underline">
                    Author pages
                    </h1>
                <ul>
                    <li><Link to="/vmart" >Vmart</Link></li>
                    <li><Link to="/hossain">Hosain</Link></li>
                    <li><Link to="/amran">Amran</Link></li>
                    <li><Link to="/sabbir">Sabbir</Link> </li>
                </ul>
            
             
                
            </div>
          
    
    )
}