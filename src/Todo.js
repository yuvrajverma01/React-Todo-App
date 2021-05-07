import React, { useState } from 'react';
import Todoinput from "./Todoinput";
import { Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';


  
{/*
    A Todo function is made and passed 4 parameters i.e.
    1. tasks
    2. completetask
    3. removetask
    4. updatetask
*/}
const Todo = ({ tasks, completetask, removetask, updatetask }) => {

    {/*
        As the webpage loads we set id of the task to null because
        we don't want that as soon as the web app opens it redirects
        to update task component rather than add new task component.
    */}
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    {/*
        To update the value of the task, makeUpdate function is used
        which take the id of the task an parameter and after the edit
        has been done the value and id is set to null again.
    */}
    const makeUpdate = value => {
        updatetask(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
    };

    // If an edit is made, makeUpdate function is called.
    if (edit.id) {
        return <Todoinput edit={edit} onSubmit={makeUpdate} />
    }

    {/*
        Again, a conditional statement is used to name the class of the div for css that
        wether the task is complete or not. JUST FOR CSS. 
    */}

    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'task__row complete' : 'task__row'} key={index}>
            <div key={task.id} onClick={() => completetask(task.id)}>
            {task.text}
            </div>
            <div className='icons'>
                <div className="icons__button">
                    <Button onClick={() => removetask(task.id)}
                    className='delete-icon'>
                        <DeleteIcon style={{ fontSize: 25, color: grey[600], marginRight: -20}} />
                    </Button>
                    <Button onClick={() => setEdit({ id: task.id, value: task.text })}
                    className='edit-icon'>
                        <UpdateIcon style={{ fontSize: 25, color: grey[600], marginLeft: -10}} />
                    </Button>
                </div>
            </div>
        </div>
      ));
};

export default Todo;