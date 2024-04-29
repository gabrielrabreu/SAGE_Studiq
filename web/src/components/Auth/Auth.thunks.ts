import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import httpClient from "@/libs/axios/axios.config";

export const login = createAsyncThunk("auth/login", async (data: ReqLogin) => {
  return await httpClient
    .post<IUser>("login", data)
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error.message);
      return Promise.reject(error);
    });
});

export const loadUser = createAsyncThunk("auth/load", async () => {
  const userJson = localStorage.getItem("user") ?? "{}";
  const user = JSON.parse(userJson) as IUser;
  const id = user.id;
  if (!id) {
    throw new Error("Can't load user!");
  }

  return await httpClient
    .post<IUser>("info", { id })
    .then((response) => response.data)
    .catch((error) => {
      toast.error(error.message);
      return Promise.reject(error);
    });
});
