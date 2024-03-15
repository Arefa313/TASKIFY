import React, { useEffect, useRef, useState } from 'react'
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone} from 'react-icons/md';
import "./styles.css";
import TodoList from './TodoList';

type Props={
  index:number;
  todo:Todo,
  todos:Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({index, todo, todos, setTodos}:Props) => {
const [edit, setEdit] = useState<boolean>(false);
const [editTodo, setEditTdo] =useState<string>(todo.todo); 

const handleDone =(id:number) =>{
  setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone: !todo.isDone}:todo
  ));
};

const handleDelete =(id:number) =>{
  setTodos(todos.filter((todo) => todo.id !==id));
};

  const handleEdit =(e: React.FormEvent, id:number) =>{
    e.preventDefault();

    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo, todo:editTodo}:todo
    )));
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()  =>{
    inputRef.current?.focus();
  }, [edit]);
 

  // function purchase(total) {
  //   console.log("Running purchase function");
  //   if (wallet >= total) {
  //     wallet -= total;
  //     document.querySelector("#wallet").textContent = wallet;
  //     document.querySelector("#message").classList.remove("#invisible");
  //     generateMeals();
  //     generateBackgroundColor();
  //     document.querySelector("#purchase-cost").textContent = parseInt(total);
  //   } else {
  //     alert("Sorry, you cannot purchase the meals!");
  //     document.querySelector("#message").classList.add("#invisible");
  //   }
  // }
  // purchase();
  
  // document
  //   .querySelector("#purchase-button")
  //   .addEventListener("click", function () {
  //     const total = parseInt(document.querySelector("#total").textContent);
  //     purchase(total);
  //   });



  // let num1 = generateUniqueRandomNumber(meals.length, lastDisplayedIndices);
  // lastDisplayedIndices = [num1, num2, num3]
  // function generateUniqueRandNumber
  // function generateUniqueRandNum(max, exclude) {
  //     console.log("running generateUniqueRandomNumber function!");
  //     let randNum;
  //     do {
  //         randNum = generateRandomNumber(max);
  //     } while (exclude.includes(randNum));
  //     return randNum;
  // }






  return (
    <Draggable draggableTd={todo.id.toString()} index={index}>
     {(provided)=>(
        <form className='todos_single' onSubmit={(e) =>handleEdit(e, todo.id)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        > 
        {
         edit ?(
         <input
         ref={inputRef}
         value={editTodo} onChange={(e) => setEditTdo(e.target.value)} className='todos_single--text'/>
         ):(
           todo.isDone ?(
             <s className='todos_single--text'>{todo.todo}</s>
                  ):(
             <span className='todos_single--text'>{todo.todo}</span>
                  )       
         )
        }
     <div>
       <span className='icon' onClick={()=>{
         if(!edit && !todo.isDone){
           setEdit(!edit)
         }}
       }>
         <AiFillEdit />
       </span>
       <span className='icon' onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
       <span className='icon' onClick={()=>handleDone(todo.id)}><MdDone /></span>
     </div>
        </form>
      )
     }

    
    </Draggable>
   
  )
}

export default SingleTodo
