"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "data/static";
import { IBoard, ITask, ITasksState } from "interfaces/ITasks";
import {
  getBoardByStatus,
  getBoardsFromTasks,
  getLocalStorage,
  getTasksFromBoards,
} from "utils/functions";

const initialState: ITasksState = {
  isBoards: getLocalStorage<IBoard[]>("boards") || getBoardsFromTasks(tasks),
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const actionBoard = getBoardByStatus(action.payload.status);
      state.isBoards[actionBoard].tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const tasks = getTasksFromBoards(state.isBoards);
      const newTasksList = tasks.filter(
        (tasks) => tasks.id !== action.payload.id
      );
      const updatedTasks = [...newTasksList, action.payload];
      state.isBoards = getBoardsFromTasks(updatedTasks);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.isBoards = getBoardsFromTasks(
        getTasksFromBoards(state.isBoards).filter(
          (task) => task.id !== action.payload
        )
      );
    },
    setBoards: (state, action: PayloadAction<IBoard[]>) => {
      state.isBoards = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, setBoards } =
  boardsSlice.actions;
export default boardsSlice.reducer;
