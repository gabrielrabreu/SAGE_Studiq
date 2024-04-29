import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { loadUser, login } from "./Auth.thunks";

interface State {
  loading: boolean;
  isAuthenticated: boolean;
  user: IUser | undefined;
  error: string | undefined;
}

const initialState: State = {
  loading: false,
  isAuthenticated: false,
  user: undefined,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      localStorage.removeItem("user");
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log("login fulfilled");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      console.log("login rejected");
    });
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      localStorage.removeItem("user");
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
