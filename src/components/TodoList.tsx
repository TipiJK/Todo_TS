import React, { useState } from 'react';
import TodoTable from './TodoTable';
import {ITodo} from './interfaces';

export default function TodoList() {


  const [todo, setTodo] = useState<ITodo>({} as ITodo);
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  
  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // don't submit form to url
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index:number) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

    return(
      <div>
        <form onSubmit={addTodo}>
          Date: <input type="date" name="date" value={todo.date} onChange={inputChanged} />
          Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
          Priority: <input type="text" name="priority" value={todo.priority} onChange={inputChanged} />
          <input type="submit" value="Add" />
        </form>
        
        <TodoTable todos={todos} deleteTodo={deleteTodo} />
      </div>
    )
  }