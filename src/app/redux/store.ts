"use client";
import boardsReducer from "app/redux/reducers/boards/boards.slice";
import modalReducer from "app/redux/reducers/modal/modal.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  boards: boardsReducer,
  modal: modalReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

// export type RootState = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
