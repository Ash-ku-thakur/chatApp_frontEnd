import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./authSlicer";
import massageSlicer from "./massageSlicer";
import socketSlicer from './socketSlicer';

let store = configureStore({
  reducer: {
    // actions
    auth: authSlicer,
    massage: massageSlicer,
    socket:socketSlicer
  },
});

export default store;
