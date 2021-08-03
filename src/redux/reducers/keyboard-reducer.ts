import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validateApi } from "../../api/api";
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
  valid: boolean | null;
};

const initialState: InitialState = {
  phoneNumber: [null, null, null, null, null, null, null, null, null, null],
  valid: null,
};

export const checkValidation = createAsyncThunk(
  "keyboard/validation",
  async (number: string) => {
    const response = await validateApi.validate(number);
    console.log(response);
    return response;
  }
);

const keyboardSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
      state.valid = null;
      if (action.payload === "Стереть" || action.payload === "Backspace") {
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
  extraReducers: (builder) => {
    builder.addCase(checkValidation.fulfilled, (state, action) => {
      state.valid = action.payload.phone_valid;
    });
  },
});

export const { insert } = keyboardSlice.actions;

export const selectPhoneNumber = (state: RootState) =>
  state.keyboard.phoneNumber;
export const selectValid = (state: RootState) => state.keyboard.valid;

export default keyboardSlice.reducer;
