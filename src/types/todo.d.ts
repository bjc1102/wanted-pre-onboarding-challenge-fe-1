import { createObjType } from "./util";
import { initialTodo } from "../components/TodoList";

export type TodoType = createObjType<typeof initialTodo>;

export interface TodoDataType extends TodoType {
  id: string;
  createdAt: string;
  updatedAt: string;
}
