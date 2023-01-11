import { AuthResponse } from "../types/Auth";
import { SignType } from "../types/form";
import { TodoDataResponse, TodoFormType } from "../types/todo";
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
  createTodo: async (value: TodoFormType): Response<TodoDataResponse> => {
    const result = await instance.post("/todos", value);
    return result.data.data;
  },
  getTodoList: async (): Response<TodoDataResponse[]> => {
    const result = await instance.get("/todos");
    return result.data.data;
  },
  getTodo: async (id: string): Response<TodoDataResponse> => {
    const result = await instance.get(`/todos/${id}`);
    return result.data.data;
  },
  updateTodo: async (
    value: TodoFormType,
    id: string
  ): Response<TodoDataResponse> => {
    const result = await instance.put(`/todos/${id}`, value);
    return result.data.data;
  },
  deleteTodo: async (id: string): Response<null> => {
    const result = await instance.delete(`/todos/${id}`);
    return result.data.data;
  },
};

export { AuthAPI, TodoAPI };
