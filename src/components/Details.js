// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getUserData } from "../redux/features/userSlice";

// const Details = () => {
//   const { id } = useParams();
//   const { data, isLoading } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUserData());
//   }, []);
//   console.log(data);

//   const selectedUser = data[+id - 1];

//   return (
//     <Card sx={{ maxWidth: 500 }}>
//       <CardContent>
//         <Typography variant='h3' color='text.secondary' gutterBottom>
//           {selectedUser?.name}
//         </Typography>
//         <Typography variant='h5' component='div'>
//           {selectedUser?.todoList?.title1}
//         </Typography>
//         <Typography variant='h5' component='div'>
//           {selectedUser?.todoList?.title2}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size='small'>Delete</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Details;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { getDetail } from "../redux/features/detailSlice";
import { useHistory } from "react-router-dom";
import { GetUserDetail } from "../services/detail.service";
const Details = () => {
  const { id } = useParams();

const {data :detail,isLoading ,error} = GetUserDetail(id);

  // const deleteHandler = () => {
  //   fetch(`http://localhost:8000/todo-user/${detail.id}`, {
  //     method: "DELETE",
  //   }).then(() => {
  //     console.log("Data Deleted");
  //     history.push("/");
  //   });
  // };

  return (
    <>
      {isLoading && <h2>Loading Data...</h2>}
      {detail && (
        <Card sx={{ maxWidth: 1200 }}>
          <CardContent>
            <Typography variant='h3' color='text.secondary' gutterBottom>
              {detail.name}'s Detail
            </Typography>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Username: {detail.username}
            </Typography>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Email: {detail.email}
            </Typography>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Phone: {detail.phone}
            </Typography>
            <br />
            <Typography variant='h3' color='text.secondary' gutterBottom>
              Todo List
            </Typography>
            {/* {
                detail.todoList.map(todo=>(
                  <Typography variant='h5'>{detail.todoList.title1}</Typography>
                ))
              } */}
            {/* <Typography variant='h5'>{detail.todoList.title1}</Typography>
            <Typography variant='h5'>{detail.todoList.title2}</Typography> */}
            {detail.todolist.map((todo) => {
              return <Typography key={todo.title}>{todo.title}</Typography>;
            })}
          </CardContent>
          <CardActions>
            <Button size='small' color='warning' >
              Delete
            </Button>
            <Link to={`/todo-user/${id}/edit`}>
              <Button color='info' size='small'>
                Edit
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Details;
