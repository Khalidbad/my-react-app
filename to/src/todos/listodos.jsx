import React, { useState, useEffect } from 'react'
import HeaderBar from './HeaderBar'
import todoApi from '../datafetch/todoApi';
import Form from '../component/form';
import { Link } from 'react-router-dom';

const Listodos = () => {
  const [todos, settodos] = useState([])
  const [loading, setLoading] = useState(false);
  const[id , setId] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await todoApi.getAll();
      settodos(data || []);
      console.log('Fetched data:', data);
    };
    fetchTodos();
  }, []);
  const onAddTodo = (todo) => {
    settodos((prevTodos) => [...prevTodos, todo]);
  } 
  const idupdate=(id) => {
    
  }



 

  return (
    <>
      <HeaderBar />
      <Form  onAddTodo={onAddTodo}/>
      <div className="w-full px-4 py-6 mt-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold  text-sky-700 ">Todo List</h2>
          <table className="w-full table-auto text-sm md:text-base text-center" >
            <thead className='text-center'>
              <tr className="border-b text-center">
                <th className="px-8 py-2 ">Id</th>
                <th className="px-8 py-2 ">Title</th>
                <th className="px-8 py-2 ">Completed</th>
                <th className="px-8 py-2 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id} className="border-b">
                  <td className='px-8 py-2'>{todo.id}</td>
                  <td className="px-8 py-2">{todo.title}</td>
                  <td className="px-8 py-2">
                    {todo.completed ? (
                      <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">Yes</span>
                    ) : (
                      <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full">No</span>
                    )}
                  </td>
                  <td className="px-8 py-2">
                    <Link to={`/edit/${todo.id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                    </Link>
                    <Link to={`/delete/${todo.id}`}>  
                      <button className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600">Delete</button>
                    </Link>
                    <Link to={`/show/${todo.id}`}> 
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Show</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Listodos;