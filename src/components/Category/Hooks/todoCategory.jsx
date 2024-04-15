import supabase from "../../../supbase"
import { useState, useEffect } from "react"

export function useToDoCategory(){
    const [category, setCategory] = useState([])
    const [filter, setFilter] = useState('None')


    const fetchData = async()=>{
        const { data, error } = await supabase
        .from('categories')
        .select('*')
        if (error) console.log(error)
        else setCategory(data)
        }
        useEffect(() => {
            fetchData()
            const allChanges =  supabase
            .channel('schema-db-changes')
            .on(
                'postgres_changes',
                {
                event: '*',
                schema: 'public',
                table:'categories'
                },
                (payload) => fetchData() //payload.new
            )
            .subscribe()
            return () => allChanges.unsubscribe();
    }, [filter,category]);
    return { category, setCategory, filter, setFilter };
      
       
    }
    
    