import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/features/userSlice";
import { GetUsersData } from "../services/userdata.service";
import { useParams } from "react-router-dom";
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
const { id } = useParams();
const{data,isLoading,error} = GetUsersData(id);
console.log(data)
  return (
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
          <nav key={usr?.id} aria-label='main mailbox folders'>
            <Link to={`/todo-user/${usr?.id}`}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <Typography variant='h5' color='info'>
                          {usr?.username}
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
