import {Link} from "react-router-dom"
export default function Hossain(){
    const imgAddress = "https://firebasestorage.googleapis.com/v0/b/messenger1-933b3.appspot.com/o/cat.PNG?alt=media&token=91ced305-0b20-4e17-9e74-ebf7eb052b7b"
    const bio = `
    
    Istiaque Hossain is a final-year student at Wayne State University, majoring in computer science. He plans to do a master’s in computer science as well. 
    In his free time, he likes to play video games and spend time with his 3-month old kitten called Loki (pictured left). He also plays for the Valorant esports team of Wayne State University.
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