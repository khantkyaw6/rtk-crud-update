import React from "react";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

const Create = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [todoBox, setTodoBox] = useState([]);
  const history = useHistory();
  const todolist = todoBox;

  // const [title, setTitle] = useState("");

  const addHandler = () => {
    setTodoBox([...todoBox, {}]);
    console.log("Add Input Field");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { name, username, phone, email, todolist };
    console.log(blog);
    fetch("http://localhost:8000/todo-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Data Added");
      history.push("/");
    });
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
            <div key={i}>
              <label>Todo Title {i + 1}</label>
              <input
                onChange={(e) => {
                  setTodoBox({
                    title: e.target.value,
                  });
                }}
              />
              <button>
                <DeleteOutline size='small' />
              </button>
            </div>
          );
        })}
        <Stack direction='row' spacing={2}>
          <Button onClick={addHandler} variant='contained' m={14} size='small'>
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
