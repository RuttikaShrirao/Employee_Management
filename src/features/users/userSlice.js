import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/userApi";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const data = await fetchUsers();
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], status: null },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "success";
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
