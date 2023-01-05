import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/features/userSlice";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";

const Home = () => {
  const { data, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  console.log(data);
  return (
    // <Box>

    //   {data?.map((usr) => (
    //     <div>
    //       <h2>{usr.username}</h2>
    //       <Link to={`/todo-user/${usr.id}`}>
    //         <Button variant='contained' size='small'>
    //           Details
    //         </Button>
    //       </Link>
    //     </div>
    //   ))}
    // </Box>
    <Box
      sx={{
        width: "100%",
        maxWidth: "430px",
        bgcolor: "background.paper",
        margin: "30px",
      }}
    >
      {isLoading && <h1>Loading...</h1>}

      {data &&
        data.map((usr) => (
          <nav aria-label='main mailbox folders'>
            <Link to={`/todo-user/${usr.id}`}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <Typography variant='h5' color='info'>
                          {usr.username}
                        </Typography>
                      }
                    />
                    <ListItemIcon>
                      <PreviewIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </Link>
          </nav>
        ))}
    </Box>
  );
};

export default Home;
