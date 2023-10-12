"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "data/static";
import { IBoard, ITask, ITasksState } from "interfaces/ITasks";
import { sortTasks } from "utils/functions";

const initialState: ITasksState = {
  tasks: tasks,
  boards: sortTasks(tasks).map((tasks, index) => {
    return { id: index++, tasks };
  }),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setBoards: (state, action: PayloadAction<IBoard[]>) => {
      state.boards = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, setBoards } =
  tasksSlice.actions;
export default tasksSlice.reducer;
