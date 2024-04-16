
import supabase from "../../../supbase";
const today = new Date().toISOString();
export const queryOne = async(filter) =>{
        
        
        const { data, error } = await supabase
            .from('tasks')
            .select(`*, 
            categories (id, category_name)`)
            .lte('due_date', today)
            .eq('status', 'active')
            .or(`due_date.eq.${today},status.eq.active`)
            .order('priority_level');

        if (error) console.error(error);
        else return data;
    }

export  const queryTwo = async(filter) =>{
        const { data, error } = await supabase
        .from('tasks')
        .select(`*, 
        categories (id, category_name)`)
        .eq('due_date', today.slice(0, 10))
        .eq('status', 'active')
        .order('priority_level')
     

        if (error) console.error(error);
        else return data;
    }
    
    export  const queryThree = async(filter) =>{
        const { data, error } = await supabase
        .from('tasks')
        .select(`*, 
        categories (id, category_name)`)
        .eq('status', 'active')
        .eq('due_date', new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)) 
        .order('priority_level');
     

        if (error) console.error(error);
        else return data;
    }

    export  const queryFour = async(filter) =>{
        const { data, error } = await supabase
        .from('tasks')
        .select(`*, 
        categories (id, category_name)`)
      .lte('due_date', new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()) 
      .eq('status', 'active')
      .order('due_date')
      .order('priority_level');
     

        if (error) console.error(error);
        else return data;
    }
    
    export  const queryFive = async(desiredDate,filter) =>{
       
        desiredDate = new Date(desiredDate)
       
        if (desiredDate){
            console.log(desiredDate)
            const { data, error } = await supabase
            .from('tasks')
            .select(`*, 
            categories (id, category_name)`)
            .gte('completed_at', new Date(desiredDate).toISOString())
    .lt('completed_at', new Date(new Date(desiredDate).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()); 
      
           
           
      
              if (error) console.error(error);
              else return  data;
        }
        
      

        // const { data2, error2 } = await supabase
        // .from('tasks')
        // .select('*')
        // .eq('status', 'completed')
        // .gte('due_date', `${desiredDate.toISOString()}T00:00:00`)
        // .lt('due_date', `${new Date(desiredDate.getTime()+ 7 * 24 * 60 * 60 * 1000).toISOString()}T23:59:59`) 
        // .order('due_date');
        // console.log(desiredDate.toISOString())
        // console.log( `${new Date(desiredDate.getTime()+ 7 * 24 * 60 * 60 * 1000).toISOString()}T23:59:59`)
    
    
    }
    
    




   
