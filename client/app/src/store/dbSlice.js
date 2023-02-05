import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const dbSlice = createSlice({
  name: "db",
  initialState: {
    userAcc: "",
    loggedIn: false,
    address: "0x1EcE8f3b4EeB3c9f10804E32d47C67Bb6F30395C",

    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },

    logIn(state, action) {
      state.loggedIn = true;
    },
    userAccount(state, action) {
      const acc = action.payload;
      state.userAcc = acc;
    },
  },
});

export const dbActions = dbSlice.actions;

export default dbSlice;
