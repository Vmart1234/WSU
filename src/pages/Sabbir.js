import {Link} from "react-router-dom"
export default function Sabbir(){
    const imgAddress = "https://firebasestorage.googleapis.com/v0/b/messenger1-933b3.appspot.com/o/space.PNG?alt=media&token=a413b289-b750-4590-8626-b5832843475c"
    const bio = `
    Sabbir Ahmed is a senior student at Wayne State University. He is majoring in Computer Science.He is currently looking for an internship or a job in the IT field. He is a chill and easy-to-get-along person. 
    In his free time, he enjoys playing soccer and also likes to travel. 
    He is also captivated by the mysteries of the world, like outer space and the ocean. Every new discovery is an exciting moment for him. He also loves ancient history.
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
