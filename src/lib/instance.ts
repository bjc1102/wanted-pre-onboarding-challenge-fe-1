import { SignType } from "../types/form";
import { TodoType } from "../types/todo";
import instance from "./axios";

const AuthAPI = {
  signup: async (value: SignType) => {
    return await instance.post("/users/create", value);
  },
  signin: async (value: SignType) => {
    return await instance.post("/users/login", value);
  },
};

const TodoAPI = {
  createTodo: async (value: TodoType) => {
    return await instance.post("/todos", value);
  },
  getTodos: async () => {
    return await instance.get("/todos");
  },
  getTodo: async (id: string) => {
    return await instance.get(`/todos/${id}`);
  },
  updateTodo: async (value: TodoType, id: string) => {
    return await instance.put(`/todos/${id}`, value);
  },
  deleteTodo: async (id: string) => {
    return await instance.delete(`/todos/${id}`);
  },
};

export { AuthAPI, TodoAPI };
