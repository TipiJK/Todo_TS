import React from "react";
import {ITodo, Props} from './interfaces';

export default function TodoTable({todos, deleteTodo}: Props) {
    return(
        <div>
            <table>
            <thead>
            <tr>
                <td>Date</td>
                <td>Description</td>
            </tr>
            </thead>

            <tbody>
            {todos.map((todo: ITodo, index:number) => 
                <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
                <td>{todo.priority}</td>
                <td><button value={index} onClick={() => deleteTodo(index)} >Delete</button></td>
                </tr>
            )}
            </tbody>
            
        </table>
        </div>
    );
}
