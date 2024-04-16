import { useState, useEffect } from 'react';
import supabase from '../../../../supbase';
import { queryOne, queryTwo, queryThree, queryFour ,queryFive} from '../queries';
export function useToDo(option, category,date) {
    const [snapShot, setSnapShot] = useState(null);
    let query = null
    
    const fetchData = async()=>{
        
            switch(option) {
                case 1:
                    query = await queryOne()
                    break;
                case 2:
                    query = await queryTwo()
                    break;
                case 3:
                    query = await queryThree()
                    break;
                case 4:
                    query = await queryFour()
                   console.log('trigger')
                    break;
                case 5:
                    const today= new Date()
                    query = await queryFive(date)
                   
                    break;
                default:
                    console.log("Invalid option");
            }
               
            setSnapShot(query)
       
    
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
            table:'tasks'
            },
            (payload) => fetchData() //payload.new
        )
        .subscribe()
        return () => allChanges.unsubscribe();
}, [option, category]);

    return [snapShot, setSnapShot];
};
