import { createObjType } from "./util";
import { initialTodo } from "../components/TodoList";

export type TodoType = createObjType<typeof initialTodo>;
