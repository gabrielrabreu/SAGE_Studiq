import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "@/libs/axios/axios.config";

export const login = createAsyncThunk("auth/login", async (data: ReqLogin) => {
  const response = await axiosInstance.post<IUser>("login", data);
  return response.data;
});

export const loadUser = createAsyncThunk("auth/load", async () => {
  const userJson = localStorage.getItem("user") || "{}";
  const user = JSON.parse(userJson) as IUser;
  const id = user.id;
  if (!id) {
    throw new Error("Can't load user!");
  }
  const response = await axiosInstance.post<IUser>("info", { id });
  return response.data;
});
