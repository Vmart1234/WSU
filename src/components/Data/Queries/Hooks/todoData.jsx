import { useState, useEffect } from 'react';
import supabase from '../../../../supbase';
import { queryOne, queryTwo, queryThree, queryFour ,queryFive} from '../queries';
export function useToDo(option) {
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
                break;
            case 5:
                const today= new Date()
                query = await queryFive(today)
                console.log('fucking')
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
}, [option]);

    return [snapShot, setSnapShot];
};
