
import './App.css';
import { useState } from 'react';

function App() {
  const [input, Setinput] = useState("")
  const [todo, settodo] = useState([])
  const [editId, seteditId] = useState(0)


  const addTodo = () => {
    if (input !== '') {
      settodo([...todo, { list: input, id: Date.now() }])
      console.log(todo);
      Setinput("")

    }



    if (editId) {
      const updatedTodo = todo.map((item) =>
        item.id === editId ? { ...item, list: input } : item
      );
      settodo(updatedTodo);
      seteditId(0);
      Setinput('');
      return; // Return early to avoid the subsequent code
    }

    // console.log(todo);

  }

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  const onDelete = (id) => {
    settodo(todo.filter((num) =>
      num.id !== id))

  }
  const onEdit = (id) => {
    const editedTodo = todo.find((num) => num.id === id);
    Setinput(editedTodo.list);
    seteditId(editedTodo.id);
  };



  // const onEdit = (id) => {
  //   const editedId = todo.find((num) => num.id === id)
  //   settodo(editedId.list)
  //   // console.log(editedId.list);


  // }

  return (
    <div>
      <h1>To-Do App</h1>


      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='type your text here' value={input} onChange={(event) => { Setinput(event.target.value) }} />
        <button onClick={addTodo}>{editId ? 'EDIT' : ' ADD'}</button>
      </form>


      <div className='list'>
        <ul>
          {/* { 
            todo.map((num) => (
              <li>{num.list}
                <span><button onClick={() => onEdit(num.id)}>edit</button></span>
                <span><button onClick={() => onDelete(num.id)}>delete</button></span>
              </li>))

          } */}
          {
            todo.map((num) => (
              <li key={num.id}>{num.list}
                <span><button onClick={() => onEdit(num.id)}>edit</button></span>
                <span><button onClick={() => onDelete(num.id)}>delete</button></span>
              </li>
            ))
          }

        </ul>

      </div >


    </div >
  );
}

export default App;
