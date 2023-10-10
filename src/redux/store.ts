"use client";
import tasksReducer from "redux/reducers/tasks.slice";
import { configureStore } from "@reduxjs/toolkit";

export function setupStore() {
  return configureStore({
    reducer: { tasks: tasksReducer },
    // [api.reducerPath]: api.reducer,
  });
}
export type RootState = ReturnType<typeof configureStore>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
