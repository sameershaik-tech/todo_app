import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo.js';
import { Button, InputLabel, FormControl, Input } from '@mui/material'
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  useEffect(() => {
    //this codes fires when the app loads and


    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })

  }, []);


  const addTodos = (event) => {
    //this will fire off when u click the button on

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input],)
    setInput('');



  }
  return (
    <div className="App">

      <h1>hello world!</h1>
      <form>

        <FormControl>
          <InputLabel> Write  a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodos} variant="contained" color="primary">
          Add To
        </Button>
        {/*<button type="submit" onClick={addTodos}>
          Add Todo
  </button>*/}
      </form>


      <ul>

        {todos.map(todo => (
          <Todo todo={todo} />

          // <li>{todo}</li>

        ))}

      </ul>

    </div>
  );
}

export default App;
