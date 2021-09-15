import counterSlice from "./counter/slice";
import authSlice from "./auth/slice";
import * as redux from "@reduxjs/toolkit";

const store = redux.configureStore({
  reducer: { auth: authSlice.reducer, counter: counterSlice.reducer },
});

export default store;
