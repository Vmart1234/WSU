import {Link} from "react-router-dom"


export default function Vmart() {
    const imgAddress = "https://i1.sndcdn.com/artworks-P6jNXrXzejyfLOkS-6noioA-t500x500.jpg"
    const bio = "👋 Hello! This is Victor Martinez a senior at Wayne State University. He is majoring in computer science. He enjoys watching anime and doing XC."
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