import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo} from "./model";
import { } from 'react-beautiful-dnd';

// let name :any;
// let age : number | string;
// let isStudent :boolean;
// let hobbies : string[];
// let role :[number , string];
// let printName:  (name:string)=> never ;
// // type Person ={
// //   name: string;
// //   age? :number;
// // };
// // let person : Person={ 
// //   name:'piyush',
// // };
// // let lotsOfPeople :Person[];
// // let personName :unknown;
// type x =  {
//   a: string;
//   d: number;
// };
// interface Person extends x{
//   name:string,
//   age?: number,
// }
const App: React.FC = () => {

const [todo, setTodo]= useState<string>("");
const [todos, setTodos ]= useState<Todo[]>([]);
const [CompletedTodos, setCompletedTodos] = useState<Todo[]>([]);  


 const handleAdd = (e:React.FormEvent) => {
  e.preventDefault();

  if (todo){
    setTodos([...todos, { id : Date.now(), todo, isDone: false}]);
    setTodo("");
  }

 };

console.log(todos);

  return (
    <DragDropContext onDragEnd={() =>{}}>
       <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd } />
      <TodoList todos={todos} setTodos={setTodos} 

      completedTodos={CompletedTodos} 
      setCompletedTodos={setCompletedTodos}
      /></div>
    </DragDropContext>
  
     
        
  );
}

export default App;
