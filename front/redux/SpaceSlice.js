import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSpace: null,
  loading: false,
  error: false,
  message: "",
};

export const spaceSlice = createSlice({
  name: "parkingSpace",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.selectedSpace = action.payload;
      state.message = "Parked";
    },
    loginFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.selectedSpace = null;
      state.loading = false;
      state.error = false;
      state.message = "logged out!";
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  subscription,
  reduxSaveVideo,
} = spaceSlice.actions;

export default spaceSlice.reducer;
