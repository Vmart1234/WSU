import { useToDoCategory } from "./Hooks/todoCategory";
import { useState } from "react";
import supabase from "../../supbase";
export default function Category({options, filter,setFilter}){

    const [deletes, setDelete] = useState(null)
    const handleFilterChange = (event) => {
       
            setFilter( event.target.value)
      };

    const handleDeleteFilterChange = (event) => {
       
            setDelete( event.target.value)
      };

      async function deleteCategory() {
        const { error } = await supabase
          .from('categories')
          .delete()
          .eq('category_name', deletes)
      
        if (error) {
          console.log('Error deleting category: ', error)
        } else {
          console.log('Category deleted successfully: ')
        }
      }
      const deleted = async (event) => {
        event.preventDefault();
        deleteCategory()
        setFilter('None')
      }

      const [categoryName, setCategoryName] = useState('');

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  }

  const addCategory = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from('categories')
      .insert([
        { category_name: categoryName },
      ])

    if (error) {
      console.log('Error adding category: ', error)
    } else {
      setCategoryName(''); 
    }
  }
    return (
        <>
    <div className="mt-10">
        <div className="">
        Filter by catergory:
        <select onChange={handleFilterChange}>
        <option key={null}value = {null} >None</option>
            {options.map(option => (
            
            <option key={option.id} value={option.id}>{option.category_name}</option>
            ))}
        </select>
        </div>
        <div className="">
       
                <form onSubmit={deleted}>
                Delete catergory:
                <select onChange={handleDeleteFilterChange}>
                <option key={null}value = {null} >None</option>
                    {options.map(option => (
                    
                    <option key={option.id} value={option.category_name}>{option.category_name}</option>
                    ))}
                </select>
            <button type="submit" className="bg-white text-black   px-4 border border-black rounded hover:bg-red-300 w-fit">Delete</button>
            </form>
        </div>
        <div className="">
        <form onSubmit={addCategory}>
            <label>
                Add category:
                <input className='w-6/12 text-sm placeholder:text-gray-400 border border-black rounded'type="text" value={categoryName} onChange={handleInputChange} required />
            </label>
            <button type="submit" className="bg-white text-black   px-4 border border-black rounded hover:bg-green-300 w-fit">Add</button>
            </form>
        </div>
     </div>
        </>
    )
}


