import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "./reducers/keyboard-reducer";

const store = configureStore({
  reducer: {
    keyboard: keyboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
