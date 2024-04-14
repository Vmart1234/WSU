export default function Options({handleChange,option}){
    return(
        <>
        <div className="flex flex-row ">
        <input type="radio" value={1} checked={option === 1} onChange={handleChange} /> 
      <input type="radio" value={2} checked={option === 2} onChange={handleChange} /> 
      <input type="radio" value={3} checked={option === 3} onChange={handleChange} /> 
      <input type="radio" value={4} checked={option === 4} onChange={handleChange} /> 
      <input type="radio" value={5} checked={option === 5} onChange={handleChange} /> 
        </div>

        </>
    )
}