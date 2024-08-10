import { createSlice } from "@reduxjs/toolkit";

let authSlicer = createSlice({
  name: "auth",
  initialState: {
    authUser: null,
    otherUsers: null,
    selUser:null,
    onlineUsers:null
  },

  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action?.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action?.payload;
    },
    setSelUser: (state, action) => {
      state.selUser = action?.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action?.payload;
    },
  },
});

export default authSlicer.reducer;
export let { setAuthUser, setOtherUsers, setSelUser, setOnlineUsers } = authSlicer.actions;
