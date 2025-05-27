import React from 'react'
import { useForm } from 'react-hook-form';
import TodoModel from '../Models/TodoModel';
import todoApi from '../datafetch/todoApi';
import { useState } from 'react';


const Form = ({ onAddTodo }) => {
    const [id, setId] = useState(1);
    const { register, handleSubmit, formState: { errors ,isValid }, reset , } = useForm();
    const onSubmit = async (data) => {
    const completed = !!data.completed;
    console.log("idupdate",id);
    
    const nextId = id + 1;
    setId(nextId); // This will update state for the next submission
     const TodoModelInstance = new TodoModel(id, data.title, completed);
    todoApi.Create(TodoModelInstance)
            .then((response) => {
                if (onAddTodo) onAddTodo(response);
                reset();
            })
            .catch((error) => {
                console.error("Error creating todo:", error);
            });
    }
    

  return (
    <div className="w-full max-w-md mx-auto mt-28 p-6 bg-white rounded-lg shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="todo-title" className="block mb-2">
                    <span className='block text-base font-semibold text-sky-700 mb-1'>Title</span>
                    <input 
                        id="todo-title"
                        type="text" 
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-gray-400 text-gray-900 shadow-sm" 
                        placeholder="Enter todo title..."
                        {...register("title", { required:{value:true , message:'Required field'} }) }
                    />
                    <span className="text-red-600 text-sm font-semibold">{errors.title?.message}</span>
                </label>
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="myCheckbox"
                    className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    {...register("completed")}
                />
                <label  htmlFor="myCheckbox" className="text-sm text-gray-700 select-none" >
                   Completed
                </label>
            </div>
            <button
                type="submit"
                className="w-full mt-4 bg-sky-700 text-white font-semibold py-2 rounded-lg shadow hover:bg-sky-800 transition-colors"
                value={"Add"}
                disabled={!isValid}
            >
                Add
            </button>
        </form>   
    </div>
  )
}

export default Form