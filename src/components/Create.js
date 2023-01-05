import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { DeleteOutline } from "@mui/icons-material";

const Create = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const todoList = [{ title1, title2 }];

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { name, username, phone, email, todoList };
    // console.log(blog);
    fetch("http://localhost:8000/todo-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Data Added");
      history.push("/");
    });
  };

  const [todoBox, setTodoBox] = useState([]);

  const editHandler = (e) => {
    e.preventDefault();

    setTodoBox([...todoBox, []]);

    console.log("Todo Clicked");
  };

  return (
    <div className='create'>
      <h2>Create a new user</h2>
      <form onSubmit={submitHandler}>
        <label>Real Name:</label>
        <input type='text' required onChange={(e) => setName(e.target.value)} />
        <label>Username:</label>
        <input
          type='text'
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <input
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type='phone'
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        {todoBox.map((data, i) => {
          return (
            <div>
              <Typography variant='body2'>Todo Title {i + 1}</Typography>
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton>
                        <DeleteOutline size='small' />
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
              {/* <label>Todo Title {i + 1}</label>
              <input />
              <button> x </button> */}
            </div>
          );
        })}

        {/* <label>Todo List</label>
        <input
          type='text'
          required
          onChange={(e) => setTitle1(e.target.value)}
        /> */}
        {/* <label>Todo Title 2:</label>
         <input
         type='text'
           required
           onChange={(e) => setTitle2(e.target.value)}
         /> */}
        <Stack direction='row' spacing={2}>
          <Button onClick={editHandler} variant='contained' m={14} size='small'>
            Add Todo
          </Button>
          <Button variant='contained' size='small' type='submit'>
            Create
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Create;
