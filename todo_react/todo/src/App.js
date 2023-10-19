
import './App.css';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function App() {
  const [input, Setinput] = useState("")
  const [todo, settodo] = useState([])




  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(todo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    settodo(items);
  }




  const addTodo = () => {
    if (input !== '') {
      settodo([...todo, { list: input, id: Date.now() }])
      console.log(todo);
      Setinput("")

    }




    /*if (editId) {
     // const updatedTodo = todo.map((item) =>
       // item.id === editId ? { ...item, list: input } : item
      //);
      //settodo(updatedTodo);
      seteditId(0);
      Setinput('');
      return; // Return early to avoid the subsequent code
    }*/

    console.log(todo);

  }

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  const onDelete = (id) => {
    settodo(todo.filter((num) =>
      num.id !== id))

  }
  /*const onEdit = (id) => {
  const editedTodo = todo.find((num) => num.id === id);
 Setinput(editedTodo.list);
 seteditId(editedTodo.id);
 };*/


  return (
    <div>
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='type your text here' value={input} onChange={(event) => { Setinput(event.target.value) }} />
        <button onClick={addTodo}>add</button>
      </form>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {todo.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className='list'>
                          <ul>
                            <li key={task.id}>{task.list}
                              <span><button onClick={() => onDelete(task.id)}>delete</button></span>
                            </li>
                          </ul>
                        </div >
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div >
  );
}

export default App;













