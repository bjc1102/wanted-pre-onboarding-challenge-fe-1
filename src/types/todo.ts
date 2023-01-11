import { createObjType } from "./util";
import { TodoInitialValue as initialTodo } from "../static/const";

export type TodoType = createObjType<typeof initialTodo>;

export interface TodoDataType extends TodoType {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
