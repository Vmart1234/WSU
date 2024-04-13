import {Link} from "react-router-dom"

export default function Authors() {
    return (
  
            <div >
                   <h1 className="text-3xl font-bold ">
                    Authors
                    </h1>
                <ul>
                    <li><Link to="/vmart" >Victor Martinez</Link></li>
                    <li><Link to="/hossain">Istiaque Hossain </Link></li>
                    <li><Link to="/amran">Amran Rahim </Link></li>
                    <li><Link to="/sabbir"> Sabbir Ahmed</Link> </li>
                </ul>
            
             
                
            </div>
          
    
    )
}
