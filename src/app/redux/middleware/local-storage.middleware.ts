import { Middleware } from "redux";
import { IBoard } from "interfaces/ITasks";
import { setLocalStorage } from "utils/functions";

export type LocalStorageMiddleware = Middleware<{}>;

const localStorageMiddleware: LocalStorageMiddleware =
  (store) => (next) => (action) => {
    const result = next(action);
    const conditions =
      action.type === "boards/addTask" ||
      action.type === "boards/updateTask" ||
      action.type === "boards/deleteTask" ||
      action.type === "boards/setBoards";

    if (conditions) {
      const { isBoards } = store.getState().boards;

      setLocalStorage<IBoard[]>("boards", isBoards);
    }

    return result;
  };

export default localStorageMiddleware;
