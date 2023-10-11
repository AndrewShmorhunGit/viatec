"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask, TaskStatusEnum } from "interfaces/ITasks";

const initialState: {
  value: string;
  data: ITask | TaskStatusEnum | null;
} = {
  value: "none",
  data: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (
      state,
      action: PayloadAction<{
        value: string;
        data: ITask | null;
      }>
    ) => {
      state.value = action.payload.value;
      state.data = action.payload.data;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
