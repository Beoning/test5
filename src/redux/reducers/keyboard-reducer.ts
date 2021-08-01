import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type PhoneKey = string | null;

type InitialState = {
  phoneNumber: [
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey,
    PhoneKey
  ];
  keys: string[];
};

const initialState: InitialState = {
  phoneNumber: [null, null, null, null, null, null, null, null, null, null],
  keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Стереть", "0"],
};

const keyboardSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
      if (action.payload === "Стереть") {
        let lastindex = state.phoneNumber.findIndex((el) => el === null);
        if (lastindex === -1) {
          state.phoneNumber[state.phoneNumber.length - 1] = null;
        }
        state.phoneNumber[lastindex - 1] = null;
      } else {
        let index = state.phoneNumber.findIndex((el) => el === null);
        state.phoneNumber[index] = action.payload;
      }
    },
  },
});

export const { insert } = keyboardSlice.actions;

export const selectkeys = (state: RootState) => state.keyboard.keys;
export const selectPhoneNumber = (state: RootState) =>
  state.keyboard.phoneNumber;

export default keyboardSlice.reducer;
