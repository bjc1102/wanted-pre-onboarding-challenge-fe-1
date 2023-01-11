import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/Auth";
import { SignType } from "../types/form";
import { TodoType } from "../types/todo";
import instance from "./axios";

type Response<T> = Promise<T>;

const AuthAPI = {
  signup: async (value: SignType): Response<AuthResponse> => {
    const result = await instance.post<AuthResponse>("/users/create", value);
    return result.data;
  },
  signin: async (value: SignType): Response<AuthResponse> => {
    const result = await instance.post<AuthResponse>("/users/login", value);
    return result.data;
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
