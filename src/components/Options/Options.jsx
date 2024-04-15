export default function Options({handleChange,option}){
    return(
        <>
        


      <div className="flex flex-row ">
        <div class='has-tooltip'>
            <span class='tooltip rounded  p-1 bg-gray-100 text-blue-500 -mt-8'>Default</span>
            <input  type="radio" value={1} checked={option === 1} onChange={handleChange} /> 
        </div>
        <div class='has-tooltip'>
            <span class='tooltip rounded p-1 bg-gray-100 text-blue-500 -mt-8'>Due today</span>
            <input  type="radio" value={2} checked={option === 2} onChange={handleChange} /> 
        </div>
        <div class='has-tooltip'>
            <span class='tooltip rounded p-1 bg-gray-100 text-blue-500 -mt-8'>Due tomorrow</span>
            <input  type="radio" value={3} checked={option === 3} onChange={handleChange} /> 
        </div>
        <div class='has-tooltip'>
            <span class='tooltip rounded  p-1 bg-gray-100 text-blue-500 -mt-8'>Due within week</span>
            <input  type="radio" value={4} checked={option === 4} onChange={handleChange} /> 
        </div>
        <div class='has-tooltip'>
            <span class='tooltip rounded  p-1 bg-gray-100 text-blue-500 -mt-8'>Report</span>
            <input  type="radio" value={5} checked={option === 5} onChange={handleChange} /> 
        </div>
        

        </div>

        </>
    )
}