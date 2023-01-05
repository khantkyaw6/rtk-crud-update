// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import { getDetail } from "../redux/features/detailSlice";

// const Edit = () => {
//   // First Delete
//   const { id } = useParams();
//   const { detail, loading } = useSelector((state) => state.data);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(() => {
//     dispatch(getDetail(id));
//   }, []);
//   console.log(detail);
//   // First Delete

//   //   Second Create
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [title1, setTitle1] = useState("");
//   const [title2, setTitle2] = useState("");
//   const todoList = { title1, title2 };
//   //   const [uuid, setUuId] = useState(id);

//   const editHandler = (e) => {
//     e.preventDefault();
//     console.log("Data Edited");
//     fetch(`http://localhost:8000/todo-user/${detail.id}`, {
//       method: "DELETE",
//     }).then(() => {
//       console.log("User Edited");
//       history.push("/");
//     });

//     const blog = { name, username, phone, email, todoList, loading };
//     // console.log(blog);
//     fetch("http://localhost:8000/todo-user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(blog),
//     }).then(() => {
//       console.log("New Data Added");
//     });
//   };

//   return (
//     <div className='create'>
//       <h2>Edit user</h2>

//       {detail && (
//         <form onSubmit={editHandler}>
//           <label>Real Name:</label>
//           <input
//             placeholder={detail.name}
//             onChange={(e) => setName(e.target.value)}
//             type='text'
//             required
//           />
//           <label>Username:</label>
//           <input
//             placeholder={detail.username}
//             onChange={(e) => setUsername(e.target.value)}
//             type='text'
//             required
//           />
//           <label>Email:</label>
//           <input
//             placeholder={detail.email}
//             type='email'
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label>Phone:</label>
//           <input
//             placeholder={detail.phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type='phone'
//             required
//           />
//           <label>Todo Title 1:</label>
//           <input
//             placeholder={detail.todoList.title1}
//             onChange={(e) => setTitle1(e.target.value)}
//             type='text'
//             required
//           />
//           <label>Todo Title 2:</label>
//           <input
//             placeholder={detail.todoList.title2}
//             onChange={(e) => setTitle2(e.target.value)}
//             type='text'
//             required
//           />
//           <button type='submit'>Edit User</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Edit;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getDetail } from "../redux/features/detailSlice";

const Edit = () => {
  // First Delete
  const { id } = useParams();
  const { detail, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  console.log(detail);

  // First Delete
  useEffect(() => {
    setName(detail.name);
    setUsername(detail.username);
    setPhone(detail.phone);
    setEmail(detail.email);
    setTitle1(detail.todoList.title1);
    setTitle2(detail.todoList.title2);
  }, []);

  // useEffect(() => {
  // setName(detail.name);
  // setUsername(detail.username);
  // setPhone(detail.phone);
  // setEmail(detail.email);
  // setTitle1(detail.todoList.title1);
  // setTitle2(detail.todoList.title2);
  // }, []);

  //   Second Create
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const todoList = { title1, title2 };
  //   const [uuid, setUuId] = useState(id);
  const blog = { name, username, phone, email, todoList };
  console.log(blog);

  const editHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/todo-user/${detail.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Data Deleted");
      history.push(`/todo-user/${detail.id}`);
    });
  };

  return (
    <div className='create'>
      <h2>Edit user</h2>

      {detail && (
        <form onSubmit={editHandler}>
          <label>Real Name:</label>
          <input
            placeholder={detail.name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            value={name}
            required
          />
          <label>Username:</label>
          <input
            placeholder={detail.username}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type='text'
            required
          />
          <label>Email:</label>
          <input
            value={email}
            placeholder={detail.email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Phone:</label>
          <input
            value={phone}
            placeholder={detail.phone}
            onChange={(e) => setPhone(e.target.value)}
            type='phone'
            required
          />
          <label>Todo Title 1:</label>
          <input
            value={todoList.title1}
            placeholder={detail.todoList.title1}
            onChange={(e) => setTitle1(e.target.value)}
            type='text'
            required
          />
          <label>Todo Title 2:</label>
          <input
            value={todoList.title2}
            placeholder={detail.todoList.title2}
            onChange={(e) => setTitle2(e.target.value)}
            type='text'
            required
          />
          <button type='submit'>Edit User</button>
        </form>
      )}
    </div>
  );
};

export default Edit;
