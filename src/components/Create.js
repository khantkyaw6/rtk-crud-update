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
  const [counter, setCounter] = useState(0);
  const todolist = todoBox;

  // const [title, setTitle] = useState("");

  const onChangeHandler = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;

    console.log(abc);
    setTodoBox([...todoBox, abc]);

    console.log(todoBox);
    // const abc = {};
    // abc[e.target.className] = e.target.value;
    // setTodoBox({ ...counter, ...abc });
    // console.log(todoBox);
  };

  const addHandler = () => {
    setCounter(counter + 1);
    console.log(counter);
    // setTodoBox([...todoBox, {}]);
    // console.log("Add Input Field");
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
        {/* {todoBox.map((data, i) => {
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
        })} */}

        {Array.from(Array(counter)).map((c, i) => {
          return (
            <div key={i}>
              <label>Todo Title {i + 1}</label>
              <input type='text' onChange={onChangeHandler} className='title' />
              <button>
                <DeleteOutline size='small' />
              </button>
            </div>
            // <input
            //   key={c}
            //   placeholder='Todo Title'
            //   className={index}
            //   type='text'
            // />
          );
        })}
        {/* {Array(counter).map((c, index) => {
          return (
            <div>
              <input type='text' />
            </div>
          );
        })} */}
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
