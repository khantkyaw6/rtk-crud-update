import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const getUserData = createAsyncThunk("user/getUserData", async () => {
  return fetch("http://localhost:8000/todo-user")
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.data = [...state, action.payload];
    },
    viewUser: (state, action) => {
      if (state.data.id === action.payload.id) {
        state.data = [action.payload];
      }
    },
  },
});

export default userSlice.reducer;
