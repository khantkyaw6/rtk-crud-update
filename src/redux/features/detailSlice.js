import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useParams } from "react-router-dom";

// const { id } = useParams();
const initialState = {
  detail: null,
  loading: false,
  error: null,
};

export const getDetail = createAsyncThunk("detail/getDetail", async (id) => {
  return fetch(`http://localhost:8000/todo-user/${id}`).then((res) =>
    res.json()
  );
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.loading = true;
    },
    [getDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    },
  },
});

export default detailSlice.reducer;
