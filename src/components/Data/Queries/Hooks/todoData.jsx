import { useState, useEffect } from 'react';
import supabase from '../../../../supbase';
export function useToDo() {
    const [snapShot, setSnapShot] = useState(null);
    const fetchData = async() =>{
        const { data } = await supabase.from('countries').select('*');
        setSnapShot(data)
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
            table:'countries'
            },
            (payload) => fetchData() //payload.new
        )
        .subscribe()
        return () => allChanges.unsubscribe();
}, []);

    return snapShot;
};
