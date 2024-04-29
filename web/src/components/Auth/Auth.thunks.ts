import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import axiosInstance from "@/libs/axios/axios.config";

export const login = createAsyncThunk("auth/login", async (data: ReqLogin) => {
  return await axiosInstance
    .post<IUser>("login", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error(error.message);
      throw new Error(error);
    });
});

export const loadUser = createAsyncThunk("auth/load", async () => {
  const userJson = localStorage.getItem("user") ?? "{}";
  const user = JSON.parse(userJson) as IUser;
  const id = user.id;
  if (!id) {
    throw new Error("Can't load user!");
  }

  return await axiosInstance
    .post<IUser>("info", { id })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error(error.message);
      throw new Error(error);
    });
});
