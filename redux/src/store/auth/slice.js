import * as redux from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = redux.createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
