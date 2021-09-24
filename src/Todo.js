import { Button, List, ListItem, ListItemText } from '@mui/material'

import React  from 'react'
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';






function Todo(props) {

 

   
    return (
        <div>
           



               


            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline"></ListItemText>
                </ListItem>
                

                <DeleteForeverIcon onClick={event =>
                    db.collection('todos').doc(props.todo.id).delete()} />
            </List>



        </div >
    )
}

export default Todo
