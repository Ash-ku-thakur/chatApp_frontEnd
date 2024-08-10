import { createSlice } from "@reduxjs/toolkit";

let massage = createSlice({
  name: "massage",
  initialState: {
    text: '',
  },

  reducers: {
    setText: (state, action) => {
      state.text = action?.payload;
    },
  },
});

export default massage.reducer;
export let { setText } = massage.actions;
