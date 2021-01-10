import { configureStore } from "@reduxjs/toolkit";
import estadoReducer from "./estadosSlice";

export default configureStore({
  reducer: {
    counter: estadoReducer,
  },
});
