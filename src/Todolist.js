import React, { useState } from 'react';
import Todoinput from './Todoinput';
import Todo from './Todo';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { IconButton } from '@material-ui/core';

function Todolist() {

    {/*'
        Create an const function and a variabe called tasks
        and a parameter setTasks and creating an empty array
        in useState    
    */}
    const [tasks, setTasks] = useState([]);

    //***************************    Add Tasks    ***************************

    {/*'
        Creating the addtask function to add new tasks.
        /^\s*$/.test(task.text) - This is used to prevent the user from
                                  adding empty tasks and tasks which contains
                                  unnecessary whitespaces.
    */}
    const addtask = task => {
        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        const newtasks = [task, ...tasks];
        setTasks(newtasks);
    };

    //***************************    Remove Tasks    ***************************

    {/*
        filter(task => task.id !== id)
        This is used to compare that if that the id of task to be removed 
        exists in tasks array then filter it and delete it.
    */}
    const removetask = id => {
        const remtasks = [...tasks].filter(task => task.id !== id);
        setTasks(remtasks);
    };

    //***************************    Update Tasks    ***************************

    const updatetask = (taskId, taskValue) => {
        if (!taskValue.text || /^\s*$/.test(taskValue.text)) {
            return;
        }

        //Update the input mapped to the id of the task.
        setTasks(prev => prev.map(item => (item.id === taskId ? taskValue : item)));
    };

    //***************************    Complete Tasks    ***************************

    const completetask = id => {
        let updatetask = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatetask);
    }

    return (
        <>
            <div className="task__header">
                <IconButton>
                    <EmojiObjectsIcon style={{ fontSize: 45}}/>
                </IconButton>
                <h2>Google Tasks</h2>
            </div>
            <Todoinput onSubmit={addtask} />
            <Todo tasks={tasks} completetask={completetask} removetask={removetask} updatetask={updatetask} />
        </>
    );
}

export default Todolist;
