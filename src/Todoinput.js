import React, { useState, useEffect, useRef } from 'react';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { Button } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import UpdateIcon from '@material-ui/icons/Update';

function Todoinput(props) {

    {/* The below function uses useState with conditional statement to
        check wether the input value is being updated or not with prop.
    */}

    const[input, setInput] = useState(props.edit ? props.edit.value: '');

    {/* The below function is used to highlight the current todo on the 
        whole app body.
    */}
    const maininput = useRef(null);
    useEffect(() => {
        maininput.current.focus();
    });

    {/* 
        To highlight the certain input or any state in he form
        e.target.value targets the desired field using it's name value.
    */}
    const makeChange = e => {
        setInput(e.target.value);
    };

    {/* 
        e.preventDefault() - prevents the form from changing the webpage
                             after pressing ENTER.
        props.onSubmit     - It generates a random ID for the current input state
                           ~ Similar to as saving ID's in realtime database server.
    */}
    const makeSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 5000),
          text: input
        });
        setInput('');
    };

    {/* 
        form       - To take input from the user, input has been used.
        props.edit - Conditional statement has been used again to check wether
                     task is being updated or a new task is being added.
        <> nd </>  - These are called fragments in React. To group input and
                     button , I have encapsulated them within a fragment.
    */}

    return (
        <form onSubmit={makeSubmit} className="todo__inputForm">
            {props.edit ? (
                <>
                <input className="todo__input Edit" placeholder="Update your task!" value={input} onChange={makeChange} ref={maininput} name="text" />
                <Button className="todo__inputButton Edit" onClick={makeSubmit}>
                    <UpdateIcon style={{ fontSize: 35, color: grey[600]}} />
                </Button>
                
                </>
            ) : (
                <>
                <input className="todo__input" placeholder="Add your task!" value={input} onChange={makeChange} ref={maininput} name="text" />
                <Button className="todo__inputButton" onClick={makeSubmit}>
                    <LibraryAddIcon style={{ fontSize: 35, color: grey[600]}} />
                </Button>
                </>
            )}
        </form>
    );
}

export default Todoinput;
