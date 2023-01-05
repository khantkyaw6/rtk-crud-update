import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import detailSlice from "./features/detailSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    data: detailSlice,
  },
});

export default store;
