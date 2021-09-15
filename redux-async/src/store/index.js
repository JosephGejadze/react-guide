import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// const logger = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   console.groupEnd();
//   return result;
// };

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  middleware: (getDefault) => getDefault().concat(logger),
});

export default store;
