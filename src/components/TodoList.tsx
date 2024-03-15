import React from 'react'
import "./styles.css";
import { Todo } from "../model"
import SingleTodo from './SingleTodo';
import { serialize } from 'v8';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos:Todo[]; 
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {


  return (
    <div className='container'>
      <Droppable droppableId="TodosList">
        {
          (provided)=>(
            <div className='todos' ref={provided.innerRef}{...provided.droppableProps}>
            <span className='todos_heading'>
              Active Tasks
            </span>
            {
              todos.map((todo.index) =>(
                <SingleTodo 
                index={index}
                todo= {todo}
                todos={todos}
                key = {todo.id}
                setTodos={setTodos} />
              ));
              } 
          </div>
          )
        }
     
      </Droppable>
    <Droppable dropableId="TodosRemove">
      {(provided) =>(
     <div className='todos remove'
     ref={provided.innerRef}{...provided.droppableProps}>
     <span className='todos_heading'>
         Completed Tasks
       </span>
       {
         completedTodos.map((todo, index) =>(
           <SingleTodo 
           index={index}
           todo= {todo}
           todos={completedTodos}
           key = {todo.id}
           setTodos={setCompletedTodos} />
         ))
       }
     </div>
      )}
    
    </Droppable>
    
    </div> 
  )
}

export default TodoList
