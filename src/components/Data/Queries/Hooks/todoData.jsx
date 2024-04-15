import { useState, useEffect } from 'react';
import supabase from '../../../../supbase';
import { queryOne, queryTwo, queryThree, queryFour ,queryFive} from '../queries';
export function useToDo(option, filter) {
    const [snapShot, setSnapShot] = useState(null);
    let query = null
    
    const fetchData = async()=>{
        if (filter != 'None'){
            switch(option) {
                case 1:
                    query = await queryOne(filter)
                    break;
                case 2:
                    query = await queryTwo(filter)
                    break;
                case 3:
                    query = await queryThree(filter)
                    break;
                case 4:
                    query = await queryFour(filter)
                    break;
                case 5:
                    const today= new Date()
                    query = await queryFive(today,filter)
                   
                    break;
                default:
                    console.log("Invalid option");
            }
               
            setSnapShot(query)
        }
    
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
}, [option, filter]);

    return [snapShot, setSnapShot];
};
