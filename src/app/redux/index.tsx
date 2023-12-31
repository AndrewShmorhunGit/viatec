import { useAppDispatch, useAppSelector } from "hooks/useAppDispatch";

import { setModal } from "../redux/reducers/modal/modal.slice";

import {
  addTask,
  updateTask,
  deleteTask,
  setBoards,
} from "./reducers/boards/boards.slice";

export { useAppSelector, useAppDispatch };

export { setModal, addTask, updateTask, deleteTask, setBoards };
