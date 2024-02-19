import {Link} from "react-router-dom"
export default function Amran(){
    const imgAddress = "https://firebasestorage.googleapis.com/v0/b/messenger1-933b3.appspot.com/o/3.PNG?alt=media&token=fac34b05-e837-4fff-80a9-6969cb5eff9a"
    const bio = `
    Amran is a final year student in Wayne state University. He will be majoring in Computer Technology (CT). 
    Some of his hobbies are watching UFC and Playing video games occasionally. He also watches soccer sometimes. 
    In his spare time he likes to make renovations and work on improvements for home. Traveling is something he also likes and 
    hopes that he can travel to new destinations in the near future. 

    `
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