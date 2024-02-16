import {Link} from "react-router-dom"

export default function Authors() {
    return (
  
            <div >
                   <h1 className="text-3xl font-bold ">
                    Authors
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