// import { createStore } from "redux"; //old way

import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

const store = configureStore({
  reducer: {
    counterRed: counterSlice.reducer,
    authRed: authSlice.reducer,
  },
});

//using redux has sideeffects/problems to mitigate for large comples apps if state store is large
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

export default store;
//never mutate state here, obj & array are refrence value, create new object when manipulating
