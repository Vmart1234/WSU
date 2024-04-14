import supabase from "../../../supbase";

const handleSubmit = async (taskData) => {
  try {
    let categoryId = null;

    if (taskData.taskCategory) {
      const { data, error } = await supabase
        .from('categories')
        .insert([{ category_name: taskData.taskCategory }]).select()

      if (error) {
        throw error;
      }
      console.log(data[0].id)
      categoryId = data[0].id;
    }

    const { data, error } = await supabase
      .from('tasks')
      .insert([
        {
          task_description: taskData.taskDescription,
          due_date: new Date(taskData.dueDate).toISOString(),
          task_category: categoryId,
          priority_level: taskData.priorityLevel,
          status: 'active'
        }
      ]);

    if (error) {
      throw error;
    }

    console.log('Task added successfully:', data);
    return data;
  } catch (error) {
    console.error('Error adding task:', error.message);
    throw error;
  }
};

export { handleSubmit };
