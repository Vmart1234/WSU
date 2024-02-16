import {Link} from "react-router-dom"
export default function Sabbir(){
    const imgAddress = ""
    const bio = ""
    return (
        <>
        <div className="w-3/4 ">
        <div className="flex ">
            <img className="w-1/2 h-30 rounded-md" src={imgAddress} alt="BioImage"></img>
            <div className="w-1/2 flex items-center ml-0">{bio}</div>
        </div>
        </div>





        <Link to="/" >Return to home</Link>
        </>
    )
}