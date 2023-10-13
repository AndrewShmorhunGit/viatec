"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "data/static";
import { IBoard, ITask, ITasksState } from "interfaces/ITasks";
import {
  getBoardByStatus,
  getBoardsFromTasks,
  getTasksFromBoards,
  sortTasks,
} from "utils/functions";

const initialState: ITasksState = {
  tasks: tasks,
  isBoards: sortTasks(tasks).map((tasks, index) => {
    return { id: index, tasks };
  }),
};

const boardsSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.isBoards[getBoardByStatus(action.payload.status)].tasks.push(
        action.payload
      );
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const tasks = getTasksFromBoards(state.isBoards);

      const updatedTasks = [...tasks, action.payload];

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
